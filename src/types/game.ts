export interface Game {
  title: string;
  url: string;
  description: string;
  highlights?: string;
  features?: string[];
  category: string;
  subcategory?: string;
  icon?: string;
}

export const games: Game[] = [
  {
    title: 'GameNGen',
    url: 'https://gamengen.github.io/',
    description: '谷歌推出的AI游戏引擎，能实时生成可玩的《DOOM》游戏画面，帧率达20帧/秒，画面逼真到让60%的玩家难以分辨真假。',
    highlights: '显示了AI取代传统编程的潜力，可能改变游戏开发行业。',
    category: '游戏设计',
    subcategory: '游戏引擎',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
  },
  {
    title: 'Scenario',
    url: 'https://www.scenario.com/',
    description: '一个AI驱动的游戏资产生成工具，专注于帮助开发者快速创建高质量的游戏素材（如角色、场景等）。',
    highlights: '适合独立开发者，生成的素材可直接用于游戏引擎。',
    category: '游戏设计',
    subcategory: '游戏引擎'
  },
  {
    title: 'Inworld',
    url: 'https://inworld.ai/',
    description: '一个AI角色创建平台，开发者可以用它为游戏设计具有个性、情感和对话能力的NPC（非玩家角色）。',
    highlights: '增强游戏世界的真实感，已被一些独立游戏采用。',
    category: '游戏设计',
    subcategory: '游戏引擎'
  },
  {
    title: 'Promethean AI',
    url: 'https://www.prometheanai.com/',
    description: '游戏环境创建领域的开拓者。该工具利用人工智能的力量来自动化构建 3D 环境的过程，使游戏开发人员能够轻松构建丰富、详细的世界。',
    highlights: '能够根据简单的描述生成各种环境。',
    features: [
      '使用 AI 自动生成 3D 环境',
      '自然语言界面，轻松交互',
      '支持多种环境类型'
    ],
    category: '游戏设计',
    subcategory: '游戏引擎'
  },
  {
    title: 'Juicy AI',
    url: 'https://juicy-ai.com/my-character',
    description: '一个以AI生成角色为核心的娱乐平台，支持用户与虚拟角色互动，包含轻度游戏化元素。',
    highlights: '界面友好，角色设计生动，互动性强。',
    category: '游戏设计',
    subcategory: '剧情设计'
  },
  {
    title: 'Character.ai',
    url: 'https://character.ai/',
    description: 'AI驱动的角色互动平台',
    category: '游戏设计',
    subcategory: '剧情设计'
  },
  {
    title: 'Death by AI',
    url: 'https://deathbyai.gg/',
    description: 'AI驱动的动作游戏平台',
    category: 'ACT'
  },
  {
    title: 'AI Town',
    url: 'https://www.convex.dev/ai-town',
    description: 'AI驱动的虚拟小镇模拟游戏',
    category: 'SLG'
  },
  {
    title: 'Fly Pieter',
    url: 'https://fly.pieter.com/',
    description: '一款多人在线飞行模拟游戏，属于模拟游戏（SIM）和多人在线游戏（MMO）的结合体。',
    highlights: '玩家可以通过网页端直接体验，无需下载或更新，操作简单，支持实时多人在线交互，最多可容纳200人同时在线',
    category: 'SLG'
  },
  {
    title: 'Oasis',
    url: 'https://oasis.decart.ai/welcome',
    description: '全球首款实时生成AI开源游戏，由Etched和Decart AI联合开发。类似《我的世界》的沙盒风格，完全由AI模型生成内容，无需传统游戏引擎。',
    highlights: '免费在线体验，开放源码，展示AI在游戏生成中的前沿潜力。',
    category: 'SLG',
    subcategory: '沙盒模拟'
  },
  {
    title: 'RolePlai',
    url: 'https://roleplai.app/',
    description: '一个基于AI的角色扮演聊天平台，用户可以与AI生成的虚拟角色互动，支持自定义剧情和游戏化体验。',
    highlights: '提供沉浸式叙事体验，适合喜欢故事驱动游戏的用户。',
    category: '互动小说'
  },
  {
    title: 'AI Dungeon',
    url: 'https://play.aidungeon.com/',
    description: 'AI驱动的文字冒险游戏',
    category: '互动小说',
    icon: 'https://play-lh.googleusercontent.com/9zvNJHOoq4JhGngfEzNOr5HrCXvvVWgGrjJ_Zj7GNxGkJkAYZBbX3gFT0GtUgx4jRA=w240-h480-rw'
  },
  {
    title: 'Emooji',
    url: 'https://www.emooji.lol/',
    description: 'AI驱动的图画游戏平台',
    category: '图画游戏',
    icon: 'https://www.emooji.lol/favicon.ico'
  },
  {
    title: 'Quick Draw',
    url: 'https://quickdraw.withgoogle.com/',
    description: '谷歌AI识别涂鸦的互动游戏',
    category: '图画游戏',
    icon: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/quickdraw_icon.max-500x500.png'
  }
];