import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { GameGrid } from './components/GameGrid';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <aside className="hidden md:block h-[calc(100vh-4rem)] sticky top-16">
          <Sidebar 
            onCategorySelect={setSelectedCategory}
            onSubcategorySelect={setSelectedSubcategory}
          />
        </aside>
        <main className="flex-1">
          {!selectedCategory && <Hero />}
          <GameGrid 
            category={selectedCategory}
            subcategory={selectedSubcategory}
          />
        </main>
      </div>
    </div>
  );
}

export default App;