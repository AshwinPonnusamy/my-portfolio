const Footer = () => {
  return (
    <footer className="bg-paper py-12 border-t-2 border-ink bg-grain mt-auto select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-ink/80 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Ashwin. All rights reserved. Published in TN, IND.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-ink-muted hover:text-accent-deep text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-accent-deep"
          >
            Privacy
          </a>
          <span className="text-ink/25 text-xs">❖</span>
          <a
            href="/terms"
            className="text-ink-muted hover:text-accent-deep text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-accent-deep"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
