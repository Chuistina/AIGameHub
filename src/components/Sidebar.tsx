import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Category {
  name: string;
  subcategories?: string[];
}

const categories: Category[] = [
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

interface SidebarProps {
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (subcategory: string | undefined) => void;
}

export function Sidebar({ onCategorySelect, onSubcategorySelect }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>();
  const [activeSubcategory, setActiveSubcategory] = useState<string>();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category.name);
    setActiveSubcategory(undefined);
    onCategorySelect(category.name);
    onSubcategorySelect(undefined);
    
    if (category.subcategories) {
      toggleCategory(category.name);
    }
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
    onCategorySelect(category);
    onSubcategorySelect(subcategory);
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">游戏分类</h2>
        <nav>
          {categories.map((category) => (
            <div key={category.name} className="mb-2">
              <button
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2 text-left rounded-lg transition-colors",
                  activeCategory === category.name
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <span>{category.name}</span>
                {category.subcategories && (
                  expandedCategories.includes(category.name) 
                    ? <ChevronDown className="h-4 w-4" />
                    : <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {category.subcategories && expandedCategories.includes(category.name) && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubcategoryClick(category.name, sub)}
                      className={cn(
                        "w-full px-4 py-2 text-left rounded-lg text-sm transition-colors",
                        activeSubcategory === sub
                          ? "bg-indigo-50 text-indigo-900"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}