import { hasAnyTimelineContent } from './experience';

export type NavItem = {
  href: string;
  label: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

const workGroup: NavGroup = {
  id: 'work',
  label: 'Work',
  items: [
    { href: '#projects', label: 'Software Projects' },
    { href: '#research', label: 'Research' },
    { href: '#iot-robotics', label: 'IoT & Robotics' },
    { href: '#cybersecurity', label: 'Cybersecurity' },
    { href: '#creative', label: 'Creative Portfolio' },
  ],
};

const profileGroup: NavGroup = {
  id: 'profile',
  label: 'Profile',
  items: [
    { href: '#about', label: 'About Me' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#experience', label: 'Education & Experience' },
  ],
};

export const primaryLinks: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#contact', label: 'Contact' },
];

export const navGroups: NavGroup[] = [workGroup, profileGroup];

export const githubLink: NavItem = { href: '#github', label: 'GitHub' };

export function getMobileFlatLinks(): NavItem[] {
  const links: NavItem[] = [
    { href: '#home', label: 'Home' },
    ...workGroup.items,
    ...profileGroup.items.filter(
      (item) => item.href !== '#experience' || hasAnyTimelineContent(),
    ),
    githubLink,
    { href: '#contact', label: 'Contact' },
  ];
  return links;
}

export function getProfileGroupItems(): NavItem[] {
  return profileGroup.items.filter(
    (item) => item.href !== '#experience' || hasAnyTimelineContent(),
  );
}