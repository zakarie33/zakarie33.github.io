export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  icon: 'code' | 'database' | 'shield' | 'cpu' | 'bot' | 'book' | 'palette' | 'wrench';
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'software',
    title: 'Software Development',
    icon: 'code',
    skills: ['Flutter', 'Dart', 'PHP', 'JavaScript', 'TypeScript', 'React', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'shield',
    skills: ['Security Analysis', 'Network Security', 'Security Research'],
  },
  {
    id: 'iot',
    title: 'IoT Development',
    icon: 'cpu',
    skills: ['Connected Device Applications', 'Sensor Integration', 'IoT Systems'],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    icon: 'bot',
    skills: ['Robotics Development', 'Intelligent Systems', 'Hardware and Software Integration'],
  },
  {
    id: 'research',
    title: 'Research',
    icon: 'book',
    skills: ['Academic Research', 'Technical Research', 'Research Writing', 'Data Analysis'],
  },
  {
    id: 'creative',
    title: 'Creative Technologies',
    icon: 'palette',
    skills: ['Graphic Design', 'Video Editing', 'Digital Media Production', 'Visual Communication'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Android Studio'],
  },
];