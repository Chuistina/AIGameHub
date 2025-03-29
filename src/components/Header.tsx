import React, { useState } from 'react';
import { GamepadIcon, Search, Menu, Globe } from 'lucide-react';
import { TranslationService } from './TranslationService';

interface HeaderProps {
  onResetFilters: () => void;
}

export function Header({ onResetFilters }: HeaderProps) {
  const [isTranslationOpen, setIsTranslationOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={onResetFilters}>
            <GamepadIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AIGameHub</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索游戏..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600" onClick={onResetFilters}>首页</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">发现</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">排行榜</a>
            <button 
              className="text-gray-700 hover:text-indigo-600 flex items-center"
              onClick={() => setIsTranslationOpen(true)}
            >
              <Globe className="mr-1 h-4 w-4" />
              翻译
            </button>
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      <TranslationService 
        isOpen={isTranslationOpen}
        onClose={() => setIsTranslationOpen(false)}
      />
    </header>
  );
}