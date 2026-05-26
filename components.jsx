// Shared bits for the Hanzilla redesign.
const { useState, useEffect, useRef, useMemo } = React;

// ─── Custom cursor ────────────────────────────────────────
function CustomCursor({ enabled }) {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) {
      document.body.classList.add('no-cursor');
      return () => document.body.classList.remove('no-cursor');
    }
    document.body.classList.remove('no-cursor');

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const onDown = (e) => {
      const interactive = e.target.closest('a, button, .post, .project, .tag-chip, [data-hoverable]');
      if (ringRef.current) ringRef.current.classList.toggle('hover', !!interactive);
    };
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, .post, .project, .tag-chip, [data-hoverable]');
      if (ringRef.current) ringRef.current.classList.toggle('hover', !!interactive);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);

    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <React.Fragment>
      <div ref={ringRef} className="custom-cursor"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </React.Fragment>
  );
}

// ─── Nav ──────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">h</span>
          <span>hanzilla</span>
        </a>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a className="btn ghost" href="#" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0 5-5m-5 5-5-5" /><path d="M5 21h14" />
            </svg>
            Resume
          </a>
          <a className="btn" href="mailto:hi@hanzilla.co">
            Say hi
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m0 0-5-5m5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────
function Hero() {
  const [tagline, setTagline] = useState(0);
  const taglines = ['browser stuff', 'AI agents', 'dev tools', 'weird ideas'];

  useEffect(() => {
    const t = setInterval(() => setTagline(i => (i + 1) % taglines.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div>
          <div className="hello-row">
            <span className="wave">👋</span>
            <span>hello there, glad you came by</span>
          </div>
          <h1>
            I'm Hanzi,
            <br />
            and I build <span className="accent-word" key={tagline}>{taglines[tagline]}</span>
            <br />
            for{' '}<span className="rotator">curious humans</span>.
          </h1>
          <p className="hero-sub">
            Currently obsessed with making browser automation feel approachable for AI agents. Previously: McGill CS, a few side projects, one very confused laundry machine.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">
              See what I'm building
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0 0-5-5m5 5 5-5"/></svg>
            </a>
            <a className="btn ghost" href="#blog">Read the blog</a>
          </div>
        </div>

        <div className="hero-photo">
          <svg className="arrow-doodle" viewBox="0 0 140 90" fill="none">
            <path d="M5 20 Q 40 60 70 35 T 130 50" stroke="#181613" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M120 42 L 132 50 L 122 60" stroke="#181613" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="6" y="14" fontFamily="Caveat" fontSize="22" fill="#181613">that's me →</text>
          </svg>
          <div className="photo-card" data-hoverable>
            <div className="tape"></div>
            <div className="photo-slot">
              [ photo of Hanzi ]<br/>
              <span style={{opacity:0.5}}>drop one in here</span>
            </div>
            <div className="caption">Hanzi @ her desk</div>
            <div className="sticker" style={{ bottom: -16, right: -10, transform: 'rotate(8deg)' }}>
              <span className="dot"></span>
              shipping now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────
function Marquee() {
  const items = ['browser automation', 'AI agents', 'MCP servers', 'side projects', 'half-baked ideas', 'good coffee', 'late-night commits'];
  const row = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {it}
          <span className="dot"></span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}{row}
      </div>
    </div>
  );
}

Object.assign(window, { CustomCursor, Nav, Hero, Marquee });
