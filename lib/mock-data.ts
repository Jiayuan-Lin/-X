export const carrierTypes = [
  "钥匙扣",
  "冰箱贴",
  "桌面摆件",
  "城市剪影",
  "记忆生态球",
  "记忆拼贴板",
];

export const carrierShowcase = [
  {
    title: "钥匙扣",
    description: "把旅途中最想反复想起的那一幕，轻轻收进一件可以随身带着走的小纪念里。",
    accent: "bg-[linear-gradient(135deg,#7C95E1,#6F88D6)]",
  },
  {
    title: "冰箱贴",
    description: "让一座城市留下的气氛与印象，变成日常抬眼就能看见的回忆。",
    accent: "bg-[linear-gradient(135deg,#B0C7FB,#9BB8F4)]",
  },
  {
    title: "桌面摆件",
    description: "适合把那段旅途里的空间感和场景层次，展示记忆生态在桌面或书架上。",
    accent: "bg-[linear-gradient(135deg,#D0D1F9,#BFC3F2)]",
  },
  {
    title: "城市剪影",
    description: "用简洁的轮廓和层次，把一个地方最鲜明的城市印象慢慢提炼出来。",
    accent: "bg-[linear-gradient(135deg,#F2E6F1,#E8D8E7)]",
  },
  {
    title: "记忆生态球",
    description: "适合收住那些印象最深刻的旅途片段，像把一小段空气也一起封存起来。",
    accent: "bg-[linear-gradient(135deg,#EED6EC,#E4C6E1)]",
  },
  {
    title: "记忆拼贴板",
    description: "把场景、色彩和零散感受重新整理成一块更有故事感的纪念拼贴。",
    accent: "bg-[linear-gradient(135deg,#D8B4E0,#C79AD3)]",
  },
];

export type MemoryEntry = {
  destination: string;
  date: string;
  description: string;
  preview: string;
  souvenirType: string;
  tags: string[];
};

export const memoryEntries: MemoryEntry[] = [
  {
    destination: "垦丁",
    date: "2024.08.25",
    description:
      "沿着垦丁海岸线骑行时，海风、浪声、夜市灯光和食物香气一起涌过来，整段旅途都像被阳光晒得发亮。",
    preview: "海岸公路、冲浪板、夜市摊位和热带食物被整理进一块温暖明亮的记忆拼贴板",
    souvenirType: "记忆拼贴板",
    tags: ["海风", "骑行", "夜市", "明亮"],
  },
  {
    destination: "上海",
    date: "2025.10.03",
    description:
      "和朋友在外滩吹风，看灯光一点点亮起来，城市像突然开始播放自己的主题曲。",
    preview: "陆家嘴天际线、江面反光和夜色文字碎片被收进一块记忆拼贴板",
    souvenirType: "记忆拼贴板",
    tags: ["夜景", "朋友", "江风", "城市"],
  },
  {
    destination: "伊斯坦布尔",
    date: "2024.08.21",
    description:
      "傍晚在加拉塔附近听见街头音乐，海风和烤面包的味道一起飘过来，整座城都很有层次。",
    preview: "圆顶、桥影和海鸟被压缩进一件有起伏层次的桌面摆件",
    souvenirType: "桌面摆件",
    tags: ["黄昏", "音乐", "海风", "层次"],
  },
  {
    destination: "丽江",
    date: "2025.01.12",
    description:
      "蓝得很高的天、石板路、木屋和太阳晒过的空气，让人感觉像把呼吸也洗干净了。",
    preview: "旧城屋脊、山线和石板路被整理成一枚暖木调钥匙扣",
    souvenirType: "钥匙扣",
    tags: ["旧城", "阳光", "山线", "慢节奏"],
  },
];
