// Main app
const { useEffect: _useEffect } = React;

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Apply tweak values as CSS vars + body classes
  _useEffect(() => {
    document.documentElement.style.setProperty('--bg', t.bg);
    document.documentElement.style.setProperty('--ink', t.ink);
    document.documentElement.style.setProperty('--accent', t.accent);
    document.body.classList.toggle('no-grain', !t.grain);
  }, [t.bg, t.ink, t.accent, t.grain]);

  return (
    <React.Fragment>
      <CustomCursor enabled={t.cursor} />
      <div className="grain"></div>
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <GitHubGraph />
      <Blog />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color">
          <TweakColor
            label="Background"
            value={t.bg}
            onChange={(v) => setTweak('bg', v)}
            options={['#F4E24A', '#FFD166', '#F2F0E6', '#181613', '#E9D5FF', '#A7E8BD']}
          />
          <TweakColor
            label="Ink"
            value={t.ink}
            onChange={(v) => setTweak('ink', v)}
            options={['#181613', '#0a0a0a', '#2A2620', '#1c2940']}
          />
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#E8472C', '#2E6BE6', '#7C3AED', '#0FA968', '#181613']}
          />
        </TweakSection>
        <TweakSection label="Motion & feel">
          <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v) => setTweak('cursor', v)} />
          <TweakToggle label="Paper grain" value={t.grain} onChange={(v) => setTweak('grain', v)} />
          <TweakToggle label="Wobble headings" value={t.wobble} onChange={(v) => setTweak('wobble', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
