// Cloudflare Worker 代码

// 安全存储API密钥
const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; // 在Cloudflare Worker环境变量中设置

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 允许跨域请求
  if (request.method === 'OPTIONS') {
    return handleCORS();
  }

  // 只处理POST请求和/translate路径
  if (request.method === 'POST' && new URL(request.url).pathname === '/translate') {
    return handleTranslate(request);
  }

  return new Response('Not Found', { status: 404 });
}

async function handleTranslate(request) {
  try {
    const { targetLang, elements } = await request.json();
    
    // 批量翻译文本
    const translations = {};
    
    for (const [id, text] of Object.entries(elements)) {
      // 调用Gemini API进行翻译
      const translatedText = await translateWithGemini(text, targetLang);
      translations[id] = translatedText;
      
      // 为了避免API限制，可以添加短暂延迟
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // 返回所有翻译结果
    return new Response(JSON.stringify(translations), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
}

async function translateWithGemini(text, targetLang) {
  // 构建提示
  const prompt = `Translate the following text to ${targetLang === 'zh' ? 'Chinese' : 'English'}: "${text}"`;
  
  // 调用Gemini API
  const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`API request failed: ${errorData.error?.message || 'Unknown error'}`);
  }
  
  const result = await response.json();
  // 从结果中提取翻译文本
  return result.candidates[0].content.parts[0].text.replace(/^["']|["']$/g, '');
}

function handleCORS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
} 