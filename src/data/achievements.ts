export type Achievement = {
  id: string;
  title: string;
  event: string;
  description: string;
  date: string;
  winningProject: string;
  certificatePath: string;
  eventPhotoPath: string;
  supportingUrl: string;
  placement: string;
};

export const achievements: Achievement[] = [
  {
    id: 'somaliland-tech-expo-hackathon',
    title: 'Second Place — Hackathon',
    event: 'Somaliland National Tech Expo',
    description:
      'Recognized as a second-place finisher in the hackathon competition at Somaliland National Tech Expo.',
    date: '',
    winningProject: '',
    certificatePath: '',
    eventPhotoPath: '',
    supportingUrl: '',
    placement: '2nd Place',
  },
];

export function hasAchievements(): boolean {
  return achievements.length > 0;
}