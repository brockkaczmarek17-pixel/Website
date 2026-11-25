import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, Bell, Bookmark, BriefcaseBusiness, Check, ChevronDown, ChevronRight, CircleHelp, Compass, GraduationCap, LayoutDashboard, Lightbulb, Menu, Plus, Search, Settings2, ShieldCheck, Sparkles, Target, TrendingUp, Users, X } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { ProfileDetail } from './components/ProfileDetail';
import { profiles } from './data/profiles';
import type { CareerProfile } from './types/profile';

const filters = ['All paths', 'Technology', 'Finance', 'Leadership', 'Entrepreneurship'];
const navItems = [
  { label: 'Discover', icon: Compass },
  { label: 'My roadmaps', icon: Target, count: '2' },
  { label: 'Compare paths', icon: Users },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('Discover');
  const [filter, setFilter] = useState('All paths');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<CareerProfile | null>(null);
  const [saved, setSaved] = useState<string[]>(['satya-nadella']);
  const [compareMode, setCompareMode] = useState(false);
  const [comparison, setComparison] = useState<string[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const visibleProfiles = useMemo(() => profiles.filter((profile) => {
    const matchesFilter = filter === 'All paths' || profile.categories.includes(filter);
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${profile.name} ${profile.role} ${profile.company} ${profile.categories.join(' ')}`.toLowerCase().includes(query);
    if (activeNav === 'My roadmaps') return saved.includes(profile.id) && matchesFilter && matchesSearch;
    return matchesFilter && matchesSearch;
  }), [activeNav, filter, saved, search]);

  function toggleSaved(id: string) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function toggleCompare(id: string) {
    setComparison((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 3 ? [...current, id] : current);
  }

  const comparisonProfiles = profiles.filter((profile) => comparison.includes(profile.id));

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100">
      <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`}>
        <div className="brand"><div className="brand-mark"><Compass size={18} strokeWidth={2.2} /></div><span>roadmap<span className="brand-period">.</span></span></div>
        <div className="workspace-label">WORKSPACE <ChevronDown size={13} /></div>
        <div className="workspace-card"><div className="avatar avatar-you">B</div><div><strong>My workspace</strong><small>Free plan</small></div><ChevronDown className="workspace-chevron" size={15} /></div>
        <div className="side-section-title">YOUR SPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon, count }) => <button key={label} onClick={() => { setActiveNav(label); setMobileMenu(false); if (label === 'Compare paths') setCompareMode(true); }} className={`nav-item ${activeNav === label ? 'nav-active' : ''}`}><Icon size={17} /><span>{label}</span>{count && <span className="nav-count">{count}</span>}</button>)}
        </nav>
        <div className="side-section-title explore-label">EXPLORE</div>
        <button className="nav-item" onClick={() => { setActiveNav('Discover'); setFilter('Technology'); setMobileMenu(false); }}><BriefcaseBusiness size={17} /><span>Industries</span></button>
        <button className="nav-item" onClick={() => { setActiveNav('Discover'); setFilter('All paths'); setMobileMenu(false); }}><Users size={17} /><span>Professionals</span></button>
        <div className="sidebar-bottom">
          <div className="upgrade-card"><div className="upgrade-icon"><Sparkles size={16} /></div><strong>Your next chapter starts here.</strong><p>Build a roadmap around where you want to go.</p><button onClick={() => setActiveNav('My roadmaps')}>Explore your roadmap <ArrowRight size={14} /></button></div>
          <button className="nav-item muted-nav"><CircleHelp size={17} /><span>Help center</span></button>
          <button className="nav-item muted-nav"><Settings2 size={17} /><span>Settings</span></button>
          <div className="user-profile"><div className="avatar avatar-user">BK</div><div><strong>Brock Kaczmarek</strong><small>Personal workspace</small></div><ChevronDown size={15} /></div>
        </div>
      </aside>
      {mobileMenu && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileMenu(false)} />}

      <main className="main-shell">
        <header className="topbar">
          <button className="mobile-menu-button icon-button" aria-label="Open menu" onClick={() => setMobileMenu(true)}><Menu size={19} /></button>
          <div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{activeNav}</strong></div>
          <div className="top-actions"><button className="top-link" onClick={() => setActiveNav('My roadmaps')}><Sparkles size={15} /> Build a roadmap</button><button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><i /></button><div className="avatar avatar-user top-avatar">BK</div></div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> CAREER CLARITY, ONE STEP AT A TIME</div><h1>{activeNav === 'My roadmaps' ? 'Your saved paths' : activeNav === 'Compare paths' ? 'Compare career paths' : <>Careers aren’t ladders.<br className="desktop-break" /> They’re <span className="gradient-text">roadmaps.</span></>}</h1><p className="hero-copy">Explore the real decisions, skills, and turning points behind careers you admire.</p></div>
            <button className="primary-button hero-cta" onClick={() => { setCompareMode(false); setActiveNav('My roadmaps'); }}><Plus size={17} /> Build my roadmap</button>
          </section>

          <section className="stats-row" aria-label="Roadmap insights">
            <div className="stat-card"><div className="stat-icon blue-icon"><Users size={17} /></div><div><strong>1,240<span>+</span></strong><small>career stories</small></div><div className="stat-trend">Growing <ArrowDownRight size={13} /></div></div>
            <div className="stat-card"><div className="stat-icon purple-icon"><TrendingUp size={17} /></div><div><strong>32</strong><small>industries mapped</small></div><div className="stat-trend">Explore <ArrowRight size={13} /></div></div>
            <div className="stat-card insight-stat"><div className="stat-icon green-icon"><ShieldCheck size={17} /></div><div><strong>Source-backed</strong><small>Every milestone has context</small></div><div className="verified-pill"><Check size={12} /> Verified</div></div>
          </section>

          <section className="section-heading"><div><div className="section-kicker">FIND YOUR NEXT MOVE</div><h2>{activeNav === 'My roadmaps' ? 'Saved for your journey' : 'Explore career journeys'}</h2><p>Learn from the paths people took—not just where they ended up.</p></div><button className={`secondary-button ${compareMode ? 'button-selected' : ''}`} onClick={() => { setCompareMode(!compareMode); setActiveNav('Discover'); }}><Users size={16} /> {compareMode ? 'Done comparing' : 'Compare paths'}</button></section>

          <section className="discovery-tools">
            <div className="filter-tabs" role="tablist" aria-label="Filter by career area">{filters.map((item) => <button role="tab" aria-selected={filter === item} key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
            <label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search people, roles, skills..." aria-label="Search career profiles" /><kbd>⌘ K</kbd></label>
          </section>
          {compareMode && <div className="compare-hint"><Users size={15} /><span>Select up to three journeys to compare the different routes people took.</span><span className="compare-count">{comparison.length}/3 selected</span></div>}

          <section className="profiles-grid" aria-live="polite">
            {visibleProfiles.map((profile) => <ProfileCard key={profile.id} profile={profile} saved={saved.includes(profile.id)} comparing={comparison.includes(profile.id)} compareMode={compareMode} onOpen={() => setSelected(profile)} onSave={() => toggleSaved(profile.id)} onCompare={() => toggleCompare(profile.id)} />)}
            {visibleProfiles.length === 0 && <div className="empty-state"><Search size={24} /><h3>No paths found</h3><p>Try a different search or choose another career area.</p><button className="secondary-button" onClick={() => { setSearch(''); setFilter('All paths'); }}>Clear filters</button></div>}
          </section>

          <section className="attainable-banner"><div className="attainable-icon"><Lightbulb size={20} /></div><div><span className="section-kicker">REAL PEOPLE. REALISTIC NEXT STEPS.</span><h2>Big careers start with everyday moves.</h2><p>Explore community-contributed journeys from professionals building meaningful careers—one step at a time.</p></div><button className="secondary-button" onClick={() => setActiveNav('Discover')}>Meet everyday professionals <ArrowRight size={15} /></button><div className="banner-glow" /></section>

          <footer className="page-footer"><span>© 2025 Roadmap</span><span>Career paths are personal. Use these stories as inspiration, not guarantees.</span><a href="mailto:hello@roadmap.careers">Feedback <ArrowRight size={12} /></a></footer>
        </div>
      </main>

      {selected && <ProfileDetail profile={selected} saved={saved.includes(selected.id)} onSave={() => toggleSaved(selected.id)} onClose={() => setSelected(null)} />}
      {compareMode && comparisonProfiles.length > 0 && <div className="compare-bar"><div className="compare-bar-avatars">{comparisonProfiles.map((profile) => <span className={`mini-avatar ${profile.avatarClass}`} key={profile.id}>{profile.initials}</span>)}</div><div className="compare-bar-copy"><strong>{comparisonProfiles.length} path{comparisonProfiles.length === 1 ? '' : 's'} selected</strong><small>{comparisonProfiles.map((profile) => profile.name.split(' ')[0]).join(' · ')}</small></div><button className="primary-button" disabled={comparisonProfiles.length < 2} onClick={() => { setCompareMode(false); if (comparisonProfiles[0]) setSelected(comparisonProfiles[0]); }}>{comparisonProfiles.length < 2 ? 'Select one more' : 'View comparison'} <ArrowRight size={15} /></button><button className="icon-button" aria-label="Clear comparison" onClick={() => setComparison([])}><X size={16} /></button></div>}
    </div>
  );
}
