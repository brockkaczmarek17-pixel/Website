import type { CareerProfile } from '../types/profile';

const source = {
  buffett: 'https://www.berkshirehathaway.com/SpecialLetters/WEBCTMLtr.html',
  nvidia: 'https://nvidianews.nvidia.com/bios/jensen-huang',
  apple: 'https://www.apple.com/leadership/tim-cook/',
  microsoft: 'https://news.microsoft.com/exec/satya-nadella/',
  jpmorgan: 'https://www.jpmorganchase.com/about/leadership/jamie-dimon',
  gm: 'https://www.gm.com/company/leadership/mary-barra',
  cuban: 'https://www.britannica.com/money/Mark-Cuban',
  bezos: 'https://www.britannica.com/money/Jeff-Bezos',
};

export const profiles: CareerProfile[] = [
  {
    id: 'warren-buffett', name: 'Warren Buffett', initials: 'WB', avatarClass: 'avatar-gold', role: 'Chairman & CEO', company: 'Berkshire Hathaway', categories: ['Finance', 'Investing', 'Leadership'], years: 74, followers: 8.4, verified: true, educationShort: 'Nebraska · Columbia', summary: 'A lifelong learner who turned an early fascination with business into a decades-long investing career built on patience and independent judgment.', skills: ['Capital allocation', 'Patience', 'Financial analysis', 'Communication'], lesson: 'A long-term mindset can be a professional advantage. Buffett repeatedly emphasized learning, focus, and sticking to decisions he understood.',
    milestones: [
      { year: '1947', age: 17, title: 'Started college at the University of Pennsylvania', description: 'Studied at Wharton before transferring to the University of Nebraska, where he completed his undergraduate degree.', icon: 'education', evidence: 'Source-backed' },
      { year: '1950', age: 20, title: 'Graduated from the University of Nebraska', description: 'Completed his business degree, then pursued graduate study in economics at Columbia after learning Benjamin Graham taught there.', icon: 'education', evidence: 'Source-backed' },
      { year: '1951', age: 21, title: 'Earned a master’s degree at Columbia', description: 'Studied under investing thinker Benjamin Graham, whose value-investing principles shaped Buffett’s early approach.', icon: 'education', evidence: 'Reported' },
      { year: '1956', age: 26, title: 'Founded Buffett Partnership Ltd.', description: 'Started an investment partnership after working in securities analysis and returning to Omaha.', icon: 'decision', evidence: 'Source-backed' },
      { year: '1965', age: 35, title: 'Took control of Berkshire Hathaway', description: 'Redirected the textile company into an investment holding company, an unusual long-term capital-allocation decision.', icon: 'decision', evidence: 'Source-backed', source: source.buffett },
      { year: '1970', age: 40, title: 'Became chairman of Berkshire Hathaway', description: 'Built the company into a diversified group of businesses and investments over the following decades.', icon: 'achievement', evidence: 'Source-backed', source: source.buffett },
    ], sources: [{ name: 'Berkshire Hathaway shareholder letters', url: source.buffett }, { name: 'Columbia Business School — Warren Buffett', url: 'https://business.columbia.edu/insights/ceo/warren-buffett' }, { name: 'Encyclopaedia Britannica — Warren Buffett', url: 'https://www.britannica.com/money/Warren-Buffett' }],
  },
  {
    id: 'jensen-huang', name: 'Jensen Huang', initials: 'JH', avatarClass: 'avatar-orange', role: 'Founder, President & CEO', company: 'NVIDIA', categories: ['Technology', 'Entrepreneurship'], years: 32, followers: 6.1, verified: true, educationShort: 'Oregon State · Stanford', summary: 'An electrical engineer who co-founded NVIDIA and led the company through major shifts in graphics, accelerated computing, and AI.', skills: ['Engineering', 'Product vision', 'Adaptability', 'Team leadership'], lesson: 'Stay close to the technology and be willing to reinvent the company as the market changes.',
    milestones: [
      { year: '1984', age: 21, title: 'Earned an electrical engineering degree', description: 'Graduated from Oregon State University, then worked in semiconductor and technology roles.', icon: 'education', evidence: 'Source-backed', source: source.nvidia },
      { year: '1985', age: 22, title: 'Joined LSI Logic', description: 'Worked as a director in the company’s chip business, building experience in the semiconductor industry.', icon: 'role', evidence: 'Source-backed', source: source.nvidia },
      { year: '1992', age: 29, title: 'Completed a master’s at Stanford', description: 'Earned a master’s degree in electrical engineering while continuing his industry career.', icon: 'education', evidence: 'Source-backed', source: source.nvidia },
      { year: '1993', age: 30, title: 'Co-founded NVIDIA', description: 'Started the company with Chris Malachowsky and Curtis Priem to advance graphics computing.', icon: 'decision', evidence: 'Source-backed', source: source.nvidia },
      { year: '1999', age: 36, title: 'NVIDIA introduced the GPU', description: 'The company helped establish the graphics processing unit as a distinct product category.', icon: 'achievement', evidence: 'Source-backed', source: source.nvidia },
      { year: '2010s–2020s', age: 55, title: 'Steered NVIDIA toward accelerated computing', description: 'Expanded the platform beyond gaming graphics into data centers and AI computing.', icon: 'decision', evidence: 'Reported', source: source.nvidia },
    ], sources: [{ name: 'NVIDIA — Jensen Huang biography', url: source.nvidia }, { name: 'Oregon State University — Jensen Huang', url: 'https://engineering.oregonstate.edu/all-stories/jensen-huang' }, { name: 'Stanford Engineering — NVIDIA’s Jensen Huang', url: 'https://engineering.stanford.edu/news' }],
  },
  {
    id: 'tim-cook', name: 'Tim Cook', initials: 'TC', avatarClass: 'avatar-sky', role: 'CEO', company: 'Apple', categories: ['Leadership', 'Technology'], years: 27, followers: 7.3, verified: true, educationShort: 'Auburn · Duke', summary: 'An operations leader who joined Apple during a difficult period and later became CEO, guiding a global consumer technology business.', skills: ['Operations', 'Supply chain', 'Execution', 'People leadership'], lesson: 'Deep operational expertise can become a powerful foundation for company-wide leadership.',
    milestones: [
      { year: '1982', age: 22, title: 'Graduated from Auburn University', description: 'Earned a bachelor’s degree in industrial engineering and began a career in operations.', icon: 'education', evidence: 'Source-backed', source: source.apple },
      { year: '1982–1994', age: 29, title: 'Built operations experience at IBM', description: 'Spent 12 years in IBM’s personal-computer business, eventually leading North American fulfillment.', icon: 'role', evidence: 'Source-backed', source: source.apple },
      { year: '1994–1997', age: 35, title: 'Moved to Intelligent Electronics and Compaq', description: 'Held senior operations roles across technology distribution and manufacturing.', icon: 'role', evidence: 'Reported', source: source.apple },
      { year: '1998', age: 37, title: 'Joined Apple to lead worldwide operations', description: 'Joined a company facing significant challenges, taking responsibility for operations and supply chain.', icon: 'decision', evidence: 'Source-backed', source: source.apple },
      { year: '2005', age: 44, title: 'Became chief operating officer', description: 'Took broader responsibility for Apple’s worldwide sales and operations.', icon: 'achievement', evidence: 'Source-backed', source: source.apple },
      { year: '2011', age: 50, title: 'Became Apple CEO', description: 'Succeeded Steve Jobs and led Apple through continued product and services growth.', icon: 'achievement', evidence: 'Source-backed', source: source.apple },
    ], sources: [{ name: 'Apple Leadership — Tim Cook', url: source.apple }, { name: 'Auburn University — Tim Cook', url: 'https://www.auburn.edu/administration/president/tim-cook.html' }, { name: 'Duke Fuqua — Tim Cook', url: 'https://www.fuqua.duke.edu/alumni/awards/tim-cook' }],
  },
  {
    id: 'satya-nadella', name: 'Satya Nadella', initials: 'SN', avatarClass: 'avatar-purple', role: 'Chairman & CEO', company: 'Microsoft', categories: ['Technology', 'Leadership'], years: 34, followers: 9.2, verified: true, educationShort: 'Manipal · Wisconsin · Chicago', summary: 'An engineer by training who grew through Microsoft’s product and cloud organizations before becoming CEO in 2014.', skills: ['Cloud computing', 'Empathy', 'Strategic change', 'Product leadership'], lesson: 'Pair technical depth with curiosity about people. Nadella has described empathy and a learning mindset as central to leadership.',
    milestones: [
      { year: '1988', age: 21, title: 'Earned an engineering degree in India', description: 'Graduated in electrical engineering from Manipal Institute of Technology.', icon: 'education', evidence: 'Source-backed', source: source.microsoft },
      { year: '1990', age: 23, title: 'Completed a computer science master’s', description: 'Earned a master’s degree from the University of Wisconsin–Milwaukee.', icon: 'education', evidence: 'Source-backed', source: source.microsoft },
      { year: '1992', age: 25, title: 'Joined Microsoft', description: 'Joined the company while also completing an MBA at the University of Chicago Booth School of Business.', icon: 'role', evidence: 'Source-backed', source: source.microsoft },
      { year: '2007', age: 40, title: 'Led Microsoft’s Online Services division', description: 'Took leadership roles across enterprise and online services, building experience across multiple business areas.', icon: 'role', evidence: 'Reported', source: source.microsoft },
      { year: '2011', age: 44, title: 'Led Server and Tools business', description: 'Helped grow Microsoft’s cloud infrastructure and services business.', icon: 'achievement', evidence: 'Source-backed', source: source.microsoft },
      { year: '2014', age: 46, title: 'Named Microsoft CEO', description: 'Became chief executive and set a renewed focus on cloud services and a learning culture.', icon: 'decision', evidence: 'Source-backed', source: source.microsoft },
    ], sources: [{ name: 'Microsoft — Satya Nadella executive profile', url: source.microsoft }, { name: 'University of Wisconsin–Milwaukee — Nadella', url: 'https://uwm.edu/news/satya-nadella/' }, { name: 'Chicago Booth — Satya Nadella', url: 'https://www.chicagobooth.edu/alumni/awards/distinguished-alumni-awards' }],
  },
  {
    id: 'jamie-dimon', name: 'Jamie Dimon', initials: 'JD', avatarClass: 'avatar-green', role: 'Chairman & CEO', company: 'JPMorgan Chase', categories: ['Finance', 'Leadership'], years: 44, followers: 5.7, verified: true, educationShort: 'Tufts · Harvard', summary: 'A finance executive whose career spans investment banking, consumer finance, and leadership of one of the world’s largest banks.', skills: ['Risk management', 'Decision-making', 'Finance', 'Organizational leadership'], lesson: 'A career can grow through a mix of functional expertise, trusted mentorship, and taking on wider business responsibility.',
    milestones: [
      { year: '1978', age: 22, title: 'Graduated from Tufts University', description: 'Earned an undergraduate degree in psychology and economics.', icon: 'education', evidence: 'Source-backed', source: source.jpmorgan },
      { year: '1982', age: 26, title: 'Earned an MBA from Harvard', description: 'Completed his MBA and joined American Express after graduation.', icon: 'education', evidence: 'Source-backed', source: source.jpmorgan },
      { year: '1982–1985', age: 27, title: 'Worked at American Express', description: 'Worked in finance before joining a team led by Sandy Weill at Commercial Credit.', icon: 'role', evidence: 'Reported', source: source.jpmorgan },
      { year: '1990s', age: 39, title: 'Advanced through leadership roles at Travelers', description: 'Held senior roles as the financial-services group expanded through mergers and reorganizations.', icon: 'role', evidence: 'Reported', source: source.jpmorgan },
      { year: '2000', age: 44, title: 'Became CEO of Bank One', description: 'Led Bank One before its merger with JPMorgan Chase in 2004.', icon: 'achievement', evidence: 'Source-backed', source: source.jpmorgan },
      { year: '2005', age: 49, title: 'Became CEO of JPMorgan Chase', description: 'Took the top role and later also became chairman of the company.', icon: 'achievement', evidence: 'Source-backed', source: source.jpmorgan },
    ], sources: [{ name: 'JPMorgan Chase — Jamie Dimon biography', url: source.jpmorgan }, { name: 'Harvard Business School — Jamie Dimon', url: 'https://www.hbs.edu/about/leadership/Pages/default.aspx' }, { name: 'Tufts University — Jamie Dimon', url: 'https://www.tufts.edu/' }],
  },
  {
    id: 'mary-barra', name: 'Mary Barra', initials: 'MB', avatarClass: 'avatar-rose', role: 'Chair & CEO', company: 'General Motors', categories: ['Engineering', 'Leadership'], years: 44, followers: 5.2, verified: true, educationShort: 'Kettering · Stanford', summary: 'An engineer who began at GM as a co-op student and progressed through manufacturing, engineering, and executive leadership.', skills: ['Engineering', 'Manufacturing', 'Product development', 'Change leadership'], lesson: 'Build credibility close to the work. Barra’s path moved from factory-floor experience through engineering and operations leadership.',
    milestones: [
      { year: '1980', age: 18, title: 'Joined GM as a co-op student', description: 'Started at the company while studying electrical engineering at what is now Kettering University.', icon: 'role', evidence: 'Source-backed', source: source.gm },
      { year: '1985', age: 24, title: 'Earned an electrical engineering degree', description: 'Graduated from the General Motors Institute (now Kettering University).', icon: 'education', evidence: 'Source-backed', source: source.gm },
      { year: '1990', age: 29, title: 'Completed an MBA at Stanford', description: 'Earned an MBA as a GM fellowship recipient before returning to the company.', icon: 'education', evidence: 'Source-backed', source: source.gm },
      { year: '2008', age: 46, title: 'Led global manufacturing engineering', description: 'Took a senior role spanning manufacturing facilities and engineering operations.', icon: 'role', evidence: 'Reported', source: source.gm },
      { year: '2011', age: 49, title: 'Became senior vice president of global product development', description: 'Led product development across GM’s global vehicle portfolio.', icon: 'achievement', evidence: 'Source-backed', source: source.gm },
      { year: '2014', age: 52, title: 'Named GM CEO', description: 'Became the first woman to lead a major global automaker.', icon: 'achievement', evidence: 'Source-backed', source: source.gm },
    ], sources: [{ name: 'General Motors — Mary Barra leadership profile', url: source.gm }, { name: 'Kettering University — Mary Barra', url: 'https://www.kettering.edu/news/mary-barra' }, { name: 'Stanford GSB — Mary Barra', url: 'https://www.gsb.stanford.edu/experience/about/board-trustees' }],
  },
  {
    id: 'mark-cuban', name: 'Mark Cuban', initials: 'MC', avatarClass: 'avatar-cyan', role: 'Entrepreneur & investor', company: 'Various ventures', categories: ['Entrepreneurship', 'Business ownership'], years: 43, followers: 6.8, verified: true, educationShort: 'Indiana University', summary: 'A business owner and investor whose early software venture, media deal, and later investments made him a recognizable entrepreneur.', skills: ['Sales', 'Persistence', 'Business development', 'Negotiation'], lesson: 'Selling, building relationships, and noticing practical customer needs can create opportunities beyond a traditional career ladder.',
    milestones: [
      { year: '1981', age: 23, title: 'Graduated from Indiana University', description: 'Earned a degree in management from the Kelley School of Business.', icon: 'education', evidence: 'Source-backed', source: source.cuban },
      { year: '1982', age: 24, title: 'Moved to Dallas and worked in sales', description: 'Took early jobs in business and sales, including selling software and working in a retail environment.', icon: 'role', evidence: 'Reported', source: source.cuban },
      { year: '1983', age: 25, title: 'Started MicroSolutions', description: 'Founded a computer consulting and software-reseller company.', icon: 'decision', evidence: 'Source-backed', source: source.cuban },
      { year: '1990', age: 32, title: 'Sold MicroSolutions', description: 'Sold his first company to CompuServe, gaining capital and experience for later ventures.', icon: 'achievement', evidence: 'Source-backed', source: source.cuban },
      { year: '1995', age: 37, title: 'Co-founded Broadcast.com', description: 'Started an internet audio and video streaming business during the early web era.', icon: 'decision', evidence: 'Source-backed', source: source.cuban },
      { year: '1999', age: 41, title: 'Broadcast.com acquired by Yahoo', description: 'Yahoo acquired the company in a major publicized deal, after which Cuban broadened his investment activity.', icon: 'achievement', evidence: 'Source-backed', source: source.cuban },
    ], sources: [{ name: 'Encyclopaedia Britannica — Mark Cuban', url: source.cuban }, { name: 'Indiana University — Mark Cuban', url: 'https://kelley.iu.edu/about/alumni/mark-cuban.html' }, { name: 'Mark Cuban Companies', url: 'https://markcubancompanies.com/' }],
  },
  {
    id: 'jeff-bezos', name: 'Jeff Bezos', initials: 'JB', avatarClass: 'avatar-amber', role: 'Founder & Executive Chair', company: 'Amazon', categories: ['Entrepreneurship', 'Technology'], years: 30, followers: 8.9, verified: true, educationShort: 'Princeton University', summary: 'A computer science graduate who left a finance career to start an online bookstore that grew into a global technology and retail company.', skills: ['Customer focus', 'Long-term thinking', 'Experimentation', 'Operations'], lesson: 'A career-changing decision can be guided by a clear view of an emerging opportunity—and a willingness to accept uncertainty.',
    milestones: [
      { year: '1986', age: 22, title: 'Graduated from Princeton', description: 'Earned degrees in electrical engineering and computer science.', icon: 'education', evidence: 'Source-backed', source: source.bezos },
      { year: '1986–1994', age: 26, title: 'Built a career in finance and technology', description: 'Worked at Fitel, Bankers Trust, and D. E. Shaw, where he became a senior vice president.', icon: 'role', evidence: 'Reported', source: source.bezos },
      { year: '1994', age: 30, title: 'Left Wall Street to start an online bookstore', description: 'Moved to Seattle and founded Amazon, initially selling books online.', icon: 'decision', evidence: 'Source-backed', source: source.bezos },
      { year: '1997', age: 33, title: 'Took Amazon public', description: 'Amazon’s initial public offering supported the company’s growth and expansion.', icon: 'achievement', evidence: 'Source-backed', source: source.bezos },
      { year: '2000', age: 36, title: 'Founded Blue Origin', description: 'Started a space company focused on building a future where millions of people live and work in space.', icon: 'decision', evidence: 'Source-backed', source: source.bezos },
      { year: '2021', age: 57, title: 'Transitioned from Amazon CEO to executive chair', description: 'Stepped down as CEO and moved to the role of executive chair.', icon: 'achievement', evidence: 'Source-backed', source: source.bezos },
    ], sources: [{ name: 'Encyclopaedia Britannica — Jeff Bezos', url: source.bezos }, { name: 'Amazon — Jeff Bezos biography', url: 'https://www.aboutamazon.com/news/company-news/jeff-bezos-founder-amazon' }, { name: 'Princeton University — Jeff Bezos', url: 'https://paw.princeton.edu/article/jeff-bezos-86' }],
  },
];
