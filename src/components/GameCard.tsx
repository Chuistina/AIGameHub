import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Game } from '../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <a 
        href={game.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-6"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {game.title}
          </h3>
          <ExternalLink className="h-5 w-5 text-gray-400 hover:text-indigo-600" />
        </div>
        
        {game.subcategory && (
          <div className="mb-3">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded">
              {game.subcategory}
            </span>
          </div>
        )}

        <p className="text-gray-600 mb-4">{game.description}</p>
        
        {game.highlights && (
          <p className="text-sm text-gray-500 italic mb-4">
            {game.highlights}
          </p>
        )}

        {game.features && game.features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700">热门功能：</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </a>
    </div>
  );
}