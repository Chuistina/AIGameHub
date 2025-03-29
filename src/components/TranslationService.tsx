import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../lib/utils';

type Language = 'en' | 'zh';

interface TranslationServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TranslationService({ isOpen, onClose }: TranslationServiceProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const changeLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    // 触发翻译逻辑
    window.localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
    translatePage(lang);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Choose Language / 选择语言</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => changeLanguage('en')}
            className={cn(
              "w-full p-3 flex items-center rounded-lg",
              selectedLanguage === 'en' 
                ? "bg-indigo-100 text-indigo-800" 
                : "bg-gray-50 hover:bg-gray-100"
            )}
          >
            <span className="mr-2">🇬🇧</span>
            <span>English (Primary)</span>
          </button>
          
          <button
            onClick={() => changeLanguage('zh')}
            className={cn(
              "w-full p-3 flex items-center rounded-lg",
              selectedLanguage === 'zh' 
                ? "bg-indigo-100 text-indigo-800" 
                : "bg-gray-50 hover:bg-gray-100"
            )}
          >
            <span className="mr-2">🇨🇳</span>
            <span>中文 (Secondary)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// 翻译页面内容
async function translatePage(targetLang: Language) {
  if (targetLang === 'en') {
    // 恢复原始英文内容
    window.location.reload();
    return;
  }

  try {
    // 使用Cloudflare Worker API调用翻译服务
    const response = await fetch('https://muddy-morning-263c.mc060601.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        targetLang,
        elements: collectTextElements()
      })
    });

    if (!response.ok) throw new Error('Translation failed');
    
    const translations = await response.json();
    applyTranslations(translations);
  } catch (error) {
    console.error('Translation error:', error);
  }
}

// 收集页面上的文本元素
function collectTextElements() {
  const textElements: Record<string, string> = {};
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, button, a, span, li');
  
  elements.forEach((el, index) => {
    const text = el.textContent?.trim();
    if (text && text.length > 0) {
      textElements[`el-${index}`] = text;
      (el as HTMLElement).dataset.translationId = `el-${index}`;
    }
  });
  
  return textElements;
}

// 应用翻译结果
function applyTranslations(translations: Record<string, string>) {
  Object.entries(translations).forEach(([id, translatedText]) => {
    const elements = document.querySelectorAll(`[data-translation-id="${id}"]`);
    elements.forEach(el => {
      el.textContent = translatedText;
    });
  });
} 