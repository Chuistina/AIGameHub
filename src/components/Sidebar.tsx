import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Category {
  name: string;
  subcategories?: string[];
}

interface SidebarProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (subcategory: string | undefined) => void;
  activeCategory?: string;
  activeSubcategory?: string;
}

export function Sidebar({ 
  categories, 
  onCategorySelect, 
  onSubcategorySelect, 
  activeCategory, 
  activeSubcategory 
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: Category) => {
    onCategorySelect(category.name);
    onSubcategorySelect(undefined);
    
    if (category.subcategories) {
      setExpandedCategories(prev => 
        prev.includes(category.name)
          ? prev.filter(cat => cat !== category.name)
          : [...prev, category.name]
      );
    }
  };

  const handleSubcategoryClick = (categoryName: string, subcategory: string) => {
    onCategorySelect(categoryName);
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