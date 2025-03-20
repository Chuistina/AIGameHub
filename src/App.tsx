import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { GameGrid } from './components/GameGrid';
import { CategoryScroll } from './components/CategoryScroll';

// 从Sidebar组件中提取出来作为共享数据
const categories = [
  {
    name: '游戏设计',
    subcategories: ['游戏引擎', '剧情人物设计']
  },
  { name: 'RPG' },
  { name: 'ACT' },
  {
    name: 'SLG',
    subcategories: ['沙盒模拟']
  },
  { name: 'AVG' },
  { name: '互动小说' },
  { name: '图画游戏' },
  { name: '解密游戏' },
  { name: '音乐游戏' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>();
  const [isScrollMode, setIsScrollMode] = useState(true);
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(undefined);
  };
  
  const handleSubcategorySelect = (subcategory: string | undefined) => {
    setSelectedSubcategory(subcategory);
    // 当选择子分类时，关闭滚动模式以允许正常浏览
    if (subcategory) {
      setIsScrollMode(false);
    }
  };
  
  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedSubcategory(undefined);
    setIsScrollMode(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onResetFilters={resetFilters} />
      
      <div className="flex">
        <aside className="hidden md:block h-[calc(100vh-4rem)] sticky top-16">
          <Sidebar 
            categories={categories}
            onCategorySelect={handleCategorySelect}
            onSubcategorySelect={handleSubcategorySelect}
            activeCategory={selectedCategory}
            activeSubcategory={selectedSubcategory}
          />
        </aside>
        
        <main className="flex-1">
          {isScrollMode ? (
            <CategoryScroll 
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={handleCategorySelect}
              onSubcategorySelect={handleSubcategorySelect}
            />
          ) : (
            <>
              {!selectedCategory && <Hero />}
              <GameGrid 
                category={selectedCategory}
                subcategory={selectedSubcategory}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;