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
  },

    {
      title: 'Hidden Door',
      url: 'https://www.hiddendoor.co/',
      description: '一个角色扮演游戏平台，支持用户创建和参与角色扮演冒险。',
      highlights: '界面友好，角色定制性强，社区活跃。',
      category: '角色扮演游戏',
      subcategory: ''
    },
    {
      title: 'Infinite Craft',
      url: 'https://neal.fun/infinite-craft/',
      description: '一个无限创意的制作游戏，玩家可以从基本元素开始，创造出各种物品。',
      highlights: '创意无限，玩法简单，适合放松。',
      category: '有趣网站',
      subcategory: ''
    },
    {
      title: 'Hexagen World',
      url: 'https://www.hexagen.world/',
      description: '一个基于六边形的策略游戏世界，玩家可以探索和建设。',
      highlights: '独特的六边形设计，策略性强，视觉效果出色。',
      category: '有趣网站',
      subcategory: ''
    },
    {
      title: 'Ifable AI',
      url: 'https://www.ifable.ai/start',
      description: '一个AI驱动的游戏设计平台，支持开发者快速构建游戏原型。',
      highlights: 'AI辅助设计，快速原型开发，适合独立开发者。',
      category: '游戏设计',
      subcategory: '游戏引擎'
    },
    {
      title: 'Playroom',
      url: 'https://joinplayroom.com/',
      description: '一个多人在线游戏平台，支持各种类型的游戏和社交互动。',
      highlights: '多样化的游戏选择，实时多人互动，社区功能丰富。',
      category: '有趣网站',
      subcategory: ''
    },
    {
      title: 'Human or Not',
      url: 'https://humanornot.so/',
      description: '一个互动游戏，玩家需要判断对话者是人类还是AI。',
      highlights: '独特的游戏概念，考验玩家的洞察力，界面简洁。',
      category: '解密游戏',
      subcategory: ''
    },
    {
      title: 'ChessGPT',
      url: 'https://chessgpt.atomic14.com/',
      description: '一个结合了AI技术的国际象棋游戏，支持与AI对战和学习。',
      highlights: 'AI对手智能，适合不同水平的玩家，界面直观。',
      category: '策略游戏',
      subcategory: ''
    },
    {
      title: 'AI2U With You Til The End',
      url: 'https://store.steampowered.com/app/2880730/AI2U_With_You_Til_The_End/',
      description: '一个叙事驱动的冒险游戏，玩家与AI伙伴共同探索故事。',
      highlights: '情感丰富的剧情，精美的视觉效果，互动性强。',
      category: '冒险游戏',
      subcategory: ''
    },
    {
      title: 'The Simulation',
      url: 'https://ww1.thesimulation.co/?usid=16&utid=37464761826',
      description: '一个沙盒模拟游戏，玩家可以创建和管理自己的虚拟世界。',
      highlights: '高度自由的玩法，丰富的模拟元素，适合策略爱好者。',
      category: '策略游戏',
      subcategory: '沙盒模拟'
    },
    {
      title: 'Oasis',
      url: 'https://oasis.decart.ai/welcome',
      description: '一个AI驱动的创意平台，支持用户生成艺术和设计。',
      highlights: 'AI生成艺术，界面友好，创意无限。',
      category: '游戏设计',
      subcategory: '剧情人物设计'
    },
    {
      title: 'WebSim',
      url: 'https://websim.ai/',
      description: '一个基于Web的模拟平台，支持用户创建和分享模拟场景。',
      highlights: '易于使用，社区分享功能，适合教育和娱乐。',
      category: '策略游戏',
      subcategory: '沙盒模拟'
    },
    {
      title: 'Human or AI',
      url: 'https://humanizeai.com/human-or-ai/',
      description: '一个互动体验，玩家需要判断文本是人类还是AI生成的。',
      highlights: '简单有趣，适合快速游戏，界面简洁。',
      category: '解密游戏',
      subcategory: ''
    },
    {
      title: 'Charmed AI',
      url: 'https://charmed.ai/',
      description: '一个AI驱动的角色设计工具，支持游戏开发者快速创建角色。',
      highlights: 'AI辅助设计，角色多样性，适合快速原型。',
      category: '游戏设计',
      subcategory: '剧情人物设计'
    },
    {
      title: 'Genie 2 by DeepMind',
      url: 'https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/',
      description: 'DeepMind的博客文章，介绍了一个大规模的基础世界模型。',
      highlights: '尖端AI研究，潜在的游戏开发应用，技术深度。',
      category: '游戏设计',
      subcategory: '游戏引擎'
    },
    {
      title: 'My Adventures AI',
      url: 'https://myadventures.ai/',
      description: '一个AI生成的冒险游戏平台，玩家可以体验个性化的冒险故事。',
      highlights: 'AI驱动的故事情节，高度互动，适合冒险爱好者。',
      category: '冒险游戏',
      subcategory: ''
    },
    {
      title: 'Endless VN',
      url: 'https://endlessvn.io/',
      description: '一个无限视觉小说的平台，玩家可以探索无尽的故事线。',
      highlights: '无限的故事可能性，视觉小说风格，界面吸引人。',
      category: '互动小说',
      subcategory: ''
    },
    {
      title: 'Smarter Than GPT',
      url: 'https://smarterthangpt.com/',
      description: '一个AI工具平台，提供比GPT更智能的解决方案。',
      highlights: '先进的AI技术，适合开发者，界面专业。',
      category: '游戏设计',
      subcategory: '游戏引擎'
    },
    {
      title: 'Ready Player Me',
      url: 'https://readyplayer.me/',
      description: '一个虚拟角色创建平台，支持用户为游戏和应用创建头像。',
      highlights: '高度定制的角色，跨平台兼容，易于集成。',
      category: '游戏设计',
      subcategory: '剧情人物设计'
    },
    {
      title: 'V3 RPG',
      url: 'https://landing.v3rpg.com/',
      description: '一个角色扮演游戏平台，支持玩家创建和参与RPG冒险。',
      highlights: '丰富的角色定制，社区驱动的内容，界面友好。',
      category: '角色扮演游戏',
      subcategory: ''
    }

];