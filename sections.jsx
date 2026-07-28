// Projects, GitHub graph, Blog, CTA, Footer

// ─── Projects ─────────────────────────────────────────────
function Projects() {
  const items = [
    {
      title: 'Hanzi Browse',
      desc: "Give your AI agent a real browser. One setup command — works with Claude Code, Cursor, Codex, and 10+ agents.",
      tags: ['MCP', 'AI agents', 'browser'],
      href: 'https://browse.hanzilla.co',
      featured: true,
      visual: 'browse',
    },
    {
      title: 'SkipLec',
      desc: 'AI-powered tool that turns lecture recordings and slides into complete study notes in minutes.',
      tags: ['EdTech', 'AI', 'students'],
      href: 'https://skiplec.com',
      visual: 'lec',
    },
    {
      title: 'jobs.hanzilla.co',
      desc: 'Job board for university students in Canada. Made for friends who kept asking where to apply.',
      tags: ['Python', 'Astro', 'side project'],
      href: 'https://jobs.hanzilla.co',
      visual: 'jobs',
    },
  ];

  return (
    <section className="section wrap" id="projects">
      <div className="section-head">
        <div>
          <div className="section-eyebrow"><span className="dot"></span> currently shipping</div>
          <h2>Things I built <em>this year</em><br/>that didn't break.</h2>
        </div>
        <p style={{ maxWidth: 280, color: 'var(--ink-soft)', margin: 0 }}>
          A mix of weekend hacks and longer-running projects. Some have users; all have bugs.
        </p>
      </div>

      <div className="projects">
        {items.map((p, i) => (
          <a key={p.title} href={p.href} className={`project ${p.featured ? 'featured' : ''}`} data-hoverable>
            <div className="project-top">
              <span className="project-num">0{i + 1} / 03</span>
              <span className="project-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
              </span>
            </div>
            <div className="project-visual"><ProjectVisual kind={p.visual} featured={p.featured} /></div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ kind, featured }) {
  const bg = featured ? '#0a0a0a' : '#FBF6E2';
  const stroke = featured ? '#F4E24A' : '#181613';
  if (kind === 'browse') {
    return (
      <svg viewBox="0 0 320 130" preserveAspectRatio="none" style={{ width: '100%', height: '100%', background: bg, borderRadius: 8 }}>
        <rect x="0" y="0" width="320" height="22" fill={featured ? '#1a1a1a' : '#E9E0BC'} />
        <circle cx="14" cy="11" r="3.5" fill="#E8472C" />
        <circle cx="26" cy="11" r="3.5" fill={featured ? '#444' : '#aaa'} />
        <circle cx="38" cy="11" r="3.5" fill={featured ? '#444' : '#aaa'} />
        <rect x="60" y="5" width="220" height="13" rx="6" fill={featured ? '#000' : '#fff'} />
        <text x="70" y="14" fontFamily="JetBrains Mono" fontSize="9" fill={stroke}>browse.hanzilla.co</text>
        <g transform="translate(20, 40)">
          <rect x="0" y="0" width="120" height="70" rx="6" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
          <text x="8" y="16" fontFamily="JetBrains Mono" fontSize="8" fill={stroke}>$ npx hanzi-browse</text>
          <text x="8" y="30" fontFamily="JetBrains Mono" fontSize="8" fill={stroke} opacity="0.6">→ connecting to claude…</text>
          <text x="8" y="44" fontFamily="JetBrains Mono" fontSize="8" fill="#4ADE80">✓ ready</text>
          <rect x="8" y="52" width="6" height="10" fill="#4ADE80">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
        <g transform="translate(170, 36)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill={featured ? '#1a1a1a' : '#fff'} stroke={stroke} strokeWidth="1" />
          <circle cx="20" cy="20" r="10" fill="#E8472C" />
          <text x="35" y="24" fontFamily="Geist" fontSize="11" fill={stroke} fontWeight="600">claude</text>
          <line x1="10" y1="42" x2="120" y2="42" stroke={stroke} strokeWidth="0.5" opacity="0.3" />
          <rect x="10" y="50" width="100" height="6" rx="2" fill={stroke} opacity="0.3" />
          <rect x="10" y="60" width="70" height="6" rx="2" fill={stroke} opacity="0.3" />
        </g>
      </svg>
    );
  }
  if (kind === 'lec') {
    return (
      <svg viewBox="0 0 320 130" preserveAspectRatio="none" style={{ width: '100%', height: '100%', background: bg, borderRadius: 8 }}>
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="120" height="90" rx="6" fill="#fff" stroke={stroke} strokeWidth="1" />
          <rect x="10" y="10" width="60" height="6" rx="2" fill="#E8472C" />
          <line x1="10" y1="26" x2="110" y2="26" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
          <line x1="10" y1="36" x2="100" y2="36" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
          <line x1="10" y1="46" x2="105" y2="46" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
          <rect x="10" y="58" width="40" height="24" rx="3" fill={stroke} opacity="0.15" />
        </g>
        <g transform="translate(160, 28)">
          <text x="0" y="10" fontFamily="Caveat" fontSize="18" fill={stroke}>notes ✎</text>
          <line x1="0" y1="20" x2="100" y2="20" stroke={stroke} strokeWidth="0.8" />
          <line x1="0" y1="34" x2="120" y2="34" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="44" x2="110" y2="44" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="54" x2="115" y2="54" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="64" x2="80" y2="64" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="74" x2="100" y2="74" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
        </g>
        <path d="M 140 60 Q 152 50 160 60" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 156 56 L 162 60 L 156 64" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  // jobs
  return (
    <svg viewBox="0 0 320 130" preserveAspectRatio="none" style={{ width: '100%', height: '100%', background: bg, borderRadius: 8 }}>
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(20, ${15 + i * 36})`}>
          <rect x="0" y="0" width="280" height="28" rx="6" fill="#fff" stroke={stroke} strokeWidth="1" />
          <circle cx="18" cy="14" r="8" fill={i === 0 ? '#E8472C' : (i === 1 ? '#181613' : '#E9D437')} />
          <rect x="34" y="8" width="80" height="5" rx="2" fill={stroke} />
          <rect x="34" y="17" width="120" height="4" rx="2" fill={stroke} opacity="0.4" />
          <rect x="220" y="9" width="50" height="12" rx="6" fill={i === 0 ? '#E8472C' : 'transparent'} stroke={stroke} strokeWidth="0.8" />
          <text x="245" y="17" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill={i === 0 ? '#fff' : stroke}>apply</text>
        </g>
      ))}
    </svg>
  );
}

// ─── GitHub contribution graph ───────────────────────────
function GitHubGraph() {
  const cells = useMemo(() => {
    // 52 weeks × 7 days = 364 cells. Deterministic-ish using a hash.
    const out = [];
    for (let w = 0; w < 52; w++) {
      for (let d = 0; d < 7; d++) {
        // sinusoidal density with noise, peaks around weeks 12-18 and 38-46
        const t = w / 52;
        const base = Math.sin(t * Math.PI * 2.4) * 0.5 + 0.5;
        const noise = ((Math.sin(w * 13.37 + d * 7.7) + 1) / 2);
        const v = base * 0.7 + noise * 0.6;
        // weekend dip
        const weekend = (d === 0 || d === 6) ? 0.7 : 1;
        const score = v * weekend;
        let lvl = 0;
        if (score > 0.45) lvl = 1;
        if (score > 0.7) lvl = 2;
        if (score > 0.95) lvl = 3;
        if (score > 1.15) lvl = 4;
        out.push(lvl);
      }
    }
    return out;
  }, []);

  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const totalContrib = useMemo(() => cells.reduce((a, b) => a + (b === 0 ? 0 : b * 3 + 1), 0), [cells]);

  return (
    <section className="section wrap" id="github">
      <div className="section-head">
        <div>
          <div className="section-eyebrow"><span className="dot"></span> the receipts</div>
          <h2>Where I've been <em>commiting</em>.</h2>
        </div>
        <a className="btn ghost" href="https://github.com/hanzili" data-hoverable>
          @hanzili on GitHub →
        </a>
      </div>

      <div className="gh-wrap">
        <div className="gh-head">
          <div className="gh-title">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
            12 months of mostly-green
          </div>
          <div className="gh-stats">
            <span><b>{totalContrib.toLocaleString()}</b>contributions</span>
            <span><b>43</b>repos</span>
            <span><b>11</b>day streak</span>
          </div>
        </div>

        <div className="gh-grid">
          <div className="gh-day-labels">
            <span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span><span>Sun</span>
          </div>
          <div className="gh-cells-wrap">
            <div className="gh-month-row" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
            <div className="gh-cells">
              {cells.map((lvl, i) => (
                <span key={i} className={`gh-cell ${lvl ? `l${lvl}` : ''}`} title={`${lvl} contributions`}></span>
              ))}
            </div>
          </div>
        </div>

        <div className="gh-legend">
          less
          <span className="gh-cell"></span>
          <span className="gh-cell l1"></span>
          <span className="gh-cell l2"></span>
          <span className="gh-cell l3"></span>
          <span className="gh-cell l4"></span>
          more
        </div>
      </div>
    </section>
  );
}

// ─── Blog ────────────────────────────────────────────────
function Blog() {
  const posts = [
    { date: 'May 8, 2026',  title: 'Supply Chain Trust Is Still Paperwork', excerpt: "Most supply-chain tools organize the request. The hard part is still turning messy evidence into something another company can trust.", tags: ['essay', 'b2b'] },
    { date: 'Mar 25, 2026', title: 'Nobody Reads Your Setup Docs',          excerpt: "10 AI agents, 10 config formats. If your user has to edit a config file, you've already lost them.", tags: ['dev tools', 'AI'] },
    { date: 'Mar 11, 2026', title: "I Hacked My Laundry Card. Here's What I Learned.", excerpt: "A CS student's experience using a Flipper Zero and AI to reverse-engineer an NFC laundry card.", tags: ['hardware', 'security', 'fun'] },
    { date: 'Feb 19, 2026', title: 'The Browser Is the New Terminal',        excerpt: "Why I keep coming back to the browser as the surface for agents — and where it still falls down.", tags: ['AI', 'browsers'] },
    { date: 'Jan 22, 2026', title: 'Shipping at School: A Survival Guide',   excerpt: "How I juggle school, side projects, and the urge to rewrite everything every two weeks.", tags: ['life', 'students'] },
    { date: 'Dec 14, 2025', title: 'On Reading Source Code Out Loud',        excerpt: "A weird habit that's done more for me than any tutorial.", tags: ['learning', 'essay'] },
    { date: 'Nov 2, 2025',  title: 'Postmortem: My First Failed Startup',     excerpt: "I built a thing nobody wanted. Here's what went wrong, in chronological order.", tags: ['startup', 'postmortem'] },
  ];

  const allTags = ['all', ...Array.from(new Set(posts.flatMap(p => p.tags)))];
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? posts : posts.filter(p => p.tags.includes(active));
  const tagCount = (t) => t === 'all' ? posts.length : posts.filter(p => p.tags.includes(t)).length;

  return (
    <section className="section wrap" id="blog">
      <div className="section-head">
        <div>
          <div className="section-eyebrow"><span className="dot"></span> notes &amp; essays</div>
          <h2>Writing <em>I'd reread</em> if<br/>I was someone else.</h2>
        </div>
        <a className="btn ghost" href="#" data-hoverable>
          Subscribe via RSS
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="currentColor"/></svg>
        </a>
      </div>

      <div className="blog-controls">
        {allTags.map(t => (
          <button key={t} className={`tag-chip ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>
            {t}<span className="count">{tagCount(t)}</span>
          </button>
        ))}
      </div>

      <div className="posts">
        {filtered.map(p => (
          <a key={p.title} className="post" href="#" data-hoverable>
            <div className="post-date">{p.date}</div>
            <div className="post-body">
              <h3>{p.title}</h3>
              <p className="post-excerpt">{p.excerpt}</p>
              <div className="post-tags">
                {p.tags.map(t => <span key={t} className="post-tag">#{t}</span>)}
              </div>
            </div>
            <div className="post-read">Read <span className="arr">→</span></div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── CTA + Footer ────────────────────────────────────────
function CTA() {
  return (
    <section className="wrap" id="cta" style={{ paddingBottom: 60 }}>
      <div className="cta-block">
        <div>
          <h2>Give your AI agent <em>a real browser</em>.</h2>
          <p style={{ opacity: 0.7, maxWidth: 460, marginTop: 18 }}>
            One command. Works with Claude Code, Cursor, Codex, and more. No config files. No keys to copy. Just open and go.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <a className="btn" href="https://browse.hanzilla.co">Try Hanzi Browse →</a>
            <a className="btn ghost" href="#" style={{ color: 'var(--bg)', borderColor: 'var(--bg)' }}>See the docs</a>
          </div>
        </div>
        <div className="cta-visual">
          <div className="win-dots"><span></span><span></span><span></span></div>
          <div><span className="prompt">$</span> npx hanzi-browse</div>
          <div className="cmt">→ detecting agent: claude-code</div>
          <div className="cmt">→ installing MCP server…</div>
          <div style={{ color: '#4ADE80' }}>✓ ready in 4.2s</div>
          <div className="cmt">→ open a tab and ask:</div>
          <div><span style={{ color: 'var(--bg)' }}>&gt; book me a flight to MTL</span><span className="cursor"></span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <h2 className="footer-brand">
              hanzilla.
              <span className="ext">made with caffeine in Montréal</span>
            </h2>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <a href="https://github.com/hanzili" data-hoverable>GitHub <span className="ext-mark">↗</span></a>
            <a href="https://www.linkedin.com/in/hanzi-li-mcgill/" data-hoverable>LinkedIn <span className="ext-mark">↗</span></a>
            <a href="https://x.com/hanzi_li" data-hoverable>Twitter / X <span className="ext-mark">↗</span></a>
            <a href="/rss.xml" data-hoverable>RSS feed</a>
          </div>
          <div className="footer-col">
            <h4>Projects</h4>
            <a href="https://browse.hanzilla.co" data-hoverable>Hanzi Browse <span className="ext-mark">↗</span></a>
            <a href="https://skiplec.com" data-hoverable>SkipLec <span className="ext-mark">↗</span></a>
            <a href="https://jobs.hanzilla.co" data-hoverable>jobs.hanzilla.co <span className="ext-mark">↗</span></a>
            <a href="mailto:hi@hanzilla.co" data-hoverable>say hi →</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Hanzi Li · operated by 1583523 B.C. LTD., Vancouver BC. All rights reserved (but plz steal ideas).</span>
          <span>last updated: today, while procrastinating</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Projects, GitHubGraph, Blog, CTA, Footer });
