import { ArrowUpRight, Bookmark, BriefcaseBusiness, Check, GraduationCap, Map, ShieldCheck, Sparkles, Users } from 'lucide-react';
import type { CareerProfile } from '../types/profile';

interface Props {
  profile: CareerProfile;
  saved: boolean;
  comparing: boolean;
  compareMode: boolean;
  onOpen: () => void;
  onSave: () => void;
  onCompare: () => void;
}

export function ProfileCard({ profile, saved, comparing, compareMode, onOpen, onSave, onCompare }: Props) {
  return (
    <article className={`profile-card ${comparing ? 'profile-card-comparing' : ''}`}>
      <div className="card-topline"><div className={`profile-avatar ${profile.avatarClass}`}>{profile.initials}</div><div className="card-identity"><div className="profile-name-row"><h3>{profile.name}</h3>{profile.verified && <span className="verified-check" title="Source-backed profile"><ShieldCheck size={14} /></span>}</div><p>{profile.role} <span>at</span> {profile.company}</p></div><button className={`save-button ${saved ? 'saved' : ''}`} onClick={onSave} title={saved ? 'Remove from saved paths' : 'Save path'} aria-label={saved ? 'Remove from saved paths' : 'Save path'}><Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /></button></div>
      <div className="profile-summary">{profile.summary}</div>
      <div className="career-chips">{profile.categories.slice(0, 2).map((category) => <span key={category}>{category}</span>)}<span className="experience-chip">{profile.years} years</span></div>
      <div className="card-divider" />
      <div className="card-meta"><div><Map size={14} /><span>{profile.milestones.length} milestones</span></div><div><GraduationCap size={15} /><span>{profile.educationShort}</span></div></div>
      <div className="card-bottom"><div className="avatar-stack"><span className="stack-avatar stack-a">{profile.initials.slice(0, 1)}</span><span className="stack-avatar stack-b"><Users size={11} /></span><span className="peer-count">+{profile.followers}</span></div><span className="card-followers">following this path</span>{compareMode ? <button className={`compare-select ${comparing ? 'compare-selected' : ''}`} onClick={onCompare}>{comparing ? <Check size={13} /> : <span className="empty-check" />} {comparing ? 'Selected' : 'Compare'}</button> : <button className="card-open" onClick={onOpen}>Explore path <ArrowUpRight size={14} /></button>}</div>
      <div className="card-glow" />
    </article>
  );
}
