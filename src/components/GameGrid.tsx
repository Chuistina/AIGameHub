import React from 'react';
import { GameCard } from './GameCard';
import { games } from '../types/game';

interface GameGridProps {
  category?: string;
  subcategory?: string;
}

export function GameGrid({ category, subcategory }: GameGridProps) {
  const filteredGames = games.filter(game => {
    if (category && game.category !== category) return false;
    if (subcategory && game.subcategory !== subcategory) return false;
    return true;
  });

  if (filteredGames.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">该分类下暂无游戏</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredGames.map((game) => (
        <GameCard key={game.url} game={game} />
      ))}
    </div>
  );
}