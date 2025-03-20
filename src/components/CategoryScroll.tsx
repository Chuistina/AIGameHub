import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GameGrid } from './GameGrid';
import { cn } from '../lib/utils';

interface Category {
  name: string;
  subcategories?: string[];
}

interface CategoryScrollProps {
  categories: Category[];
  selectedCategory?: string;
  selectedSubcategory?: string;
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (subcategory: string | undefined) => void;
}

export function CategoryScroll({ 
  categories, 
  selectedCategory, 
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect
}: CategoryScrollProps) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // 初始化引用数组
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, categories.length);
  }, [categories]);
  
  // 当选择类别变化时，滚动到对应的类别
  useEffect(() => {
    if (selectedCategory) {
      const categoryIndex = categories.findIndex(cat => cat.name === selectedCategory);
      if (categoryIndex !== -1 && !isScrolling) {
        scrollToSection(categoryIndex);
      }
    }
  }, [selectedCategory]);
  
  // 滚动监听设置
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const handleScroll = () => {
      if (isScrolling) return;
      
      const currentScrollPos = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      
      // 确定当前活动的部分
      const currentSectionIndex = sectionRefs.current.findIndex((section, index) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        return currentScrollPos >= sectionTop - containerHeight / 2 && 
               currentScrollPos < sectionBottom - containerHeight / 2;
      });
      
      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
        
        // 如果滚动导致活动部分变化，更新所选类别（但不触发新的滚动）
        if (categories[currentSectionIndex] && categories[currentSectionIndex].name !== selectedCategory) {
          // 使用setTimeout避免在滚动处理程序中更新状态
          setTimeout(() => {
            onCategorySelect(categories[currentSectionIndex].name);
            onSubcategorySelect(undefined);
          }, 0);
        }
      }
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isScrolling, categories, selectedCategory, onCategorySelect, onSubcategorySelect]);
  
  // 处理滚动到特定部分
  const scrollToSection = (index: number) => {
    if (!sectionRefs.current[index]) return;
    
    setIsScrolling(true);
    setActiveSection(index);
    
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // 在滚动结束后重置滚动状态
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 滚动动画大约需要1秒
  };
  
  // 处理滚轮事件
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && activeSection < categories.length - 1) {
      // 向下滚动
      scrollToSection(activeSection + 1);
    } else if (e.deltaY < 0 && activeSection > 0) {
      // 向上滚动
      scrollToSection(activeSection - 1);
    }
  };
  
  // 处理分类点击
  const handleCategoryClick = (categoryName: string, index: number) => {
    onCategorySelect(categoryName);
    onSubcategorySelect(undefined);
    scrollToSection(index);
  };
  
  return (
    <div 
      ref={scrollContainerRef}
      className="relative h-[calc(100vh-4rem)] overflow-auto snap-y snap-mandatory" 
      onWheel={handleWheel}
    >
      {/* 滚动导航 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeSection === index 
                ? "bg-indigo-600 scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`滚动到${category.name}分类`}
          />
        ))}
      </div>
      
      {/* 分类内容 */}
      {categories.map((category, index) => (
        <div
          key={index}
          ref={el => sectionRefs.current[index] = el}
          className={cn(
            "min-h-screen snap-start py-10 px-6",
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          )}
        >
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
            {category.name}
          </h2>
          
          {/* 分类标签与子分类 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleCategoryClick(category.name, index)}
              className={cn(
                "px-6 py-2 rounded-full transition-colors",
                selectedCategory === category.name && !selectedSubcategory
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              )}
            >
              {category.name}
            </button>
            
            {category.subcategories && category.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  onCategorySelect(category.name);
                  onSubcategorySelect(sub);
                }}
                className={cn(
                  "px-6 py-2 rounded-full transition-colors",
                  selectedCategory === category.name && selectedSubcategory === sub
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                )}
              >
                {sub}
              </button>
            ))}
          </div>
          
          {/* 游戏网格 */}
          <GameGrid 
            category={selectedCategory === category.name ? selectedCategory : category.name} 
            subcategory={selectedCategory === category.name ? selectedSubcategory : undefined} 
          />
          
          {/* 滚动指示器 */}
          {index < categories.length - 1 && (
            <div 
              className="flex flex-col items-center justify-center mt-12 cursor-pointer animate-bounce"
              onClick={() => scrollToSection(index + 1)}
            >
              <p className="text-gray-500 mb-2">滚动查看更多</p>
              <ChevronDown className="w-6 h-6 text-indigo-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 