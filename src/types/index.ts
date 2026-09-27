export interface MultiverseTrack {
  id: string;
  codename: string;
  alliance: string;
  themeColor: string; // hex or tailwind
  accentBorder: string;
  description: string;
  techStack: string[];
  bounty: string;
  image?: string;
  colSpan?: string;
  featured?: boolean;
}

export interface InfinityStone {
  id: string;
  name: string;
  color: string;
  glowClass: string;
  bgHex: string;
  lore: string;
  perk: string;
  secretBonus: string;
  iconName: string;
}

export interface ScheduleItem {
  time: string;
  phase: string;
  title: string;
  description: string;
  tag: string;
  location: string;
  isMilestone?: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  superheroAlias: string;
  role: string;
  company: string;
  trackAffiliation: string;
  bio: string;
  avatarSeed: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Logistics' | 'Hacking' | 'Prizes';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  college: string;
  isBennettStudent: boolean;
  enrollmentNo?: string;
  phone: string;
  githubUrl: string;
  discordHandle: string;
  trackId: string;
  teamType: 'solo' | 'team';
  teamName: string;
  teamSize: number;
  superheroClass: string;
}

export interface HoloPassData extends RegistrationFormData {
  passId: string;
  issueDate: string;
  qrPayload: string;
}
