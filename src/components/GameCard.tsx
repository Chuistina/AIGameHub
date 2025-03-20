import React, { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Game } from '../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  // 获取网站域名，用于生成favicon url
  const getDomain = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch (e) {
      return '';
    }
  };

  // 计算图标URL
  const iconUrl = useMemo(() => {
    if (game.icon) return game.icon; // 如果有自定义图标，使用自定义图标
    const domain = getDomain(game.url);
    // 请求更大尺寸的图标以获得更好的显示效果
    return domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : '';
  }, [game.url, game.icon]);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <a 
        href={game.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-6"
      >
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            {iconUrl && (
              <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                <img 
                  src={iconUrl} 
                  alt={`${game.title} 图标`} 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // 如果图标加载失败，显示首字母
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerText = game.title.charAt(0).toUpperCase();
                    (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#4F46E5';
                    (e.target as HTMLImageElement).parentElement!.style.color = 'white';
                    (e.target as HTMLImageElement).parentElement!.style.fontSize = '1.2rem';
                    (e.target as HTMLImageElement).parentElement!.style.fontWeight = 'bold';
                  }}
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900">
              {game.title}
            </h3>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 hover:text-indigo-600" />
        </div>
        
        {game.subcategory && (
          <div className="mb-3 mt-3">
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