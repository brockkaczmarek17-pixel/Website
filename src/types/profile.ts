export type Evidence = 'Source-backed' | 'Reported' | 'Inferred';
export type MilestoneIcon = 'education' | 'role' | 'decision' | 'achievement';

export interface Milestone {
  year: string;
  age: number;
  title: string;
  description: string;
  icon: MilestoneIcon;
  evidence: Evidence;
  source?: string;
}

export interface CareerProfile {
  id: string;
  name: string;
  initials: string;
  avatarClass: string;
  role: string;
  company: string;
  categories: string[];
  years: number;
  followers: number;
  verified: boolean;
  summary: string;
  educationShort: string;
  skills: string[];
  lesson: string;
  milestones: Milestone[];
  sources: { name: string; url: string }[];
}
