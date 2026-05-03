export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelance Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn GitHub Commits Into{" "}
          <span className="text-[#58a6ff]">Professional Invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub account, set hourly rates per project, and automatically generate detailed PDF invoices from your commit history — no manual time tracking needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial · Cancel anytime</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect GitHub", desc: "OAuth login syncs all your repos and commit history instantly." },
            { step: "02", title: "Set Rates", desc: "Configure hourly rates per project or client. We estimate hours from commit patterns." },
            { step: "03", title: "Export Invoice", desc: "Generate a professional PDF invoice with a full commit breakdown in one click." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold mb-2 tracking-widest">{item.step}</div>
              <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "Automatic commit-to-hours estimation",
              "Professional PDF invoices",
              "Webhook-based real-time tracking",
              "Configurable rates per project",
              "Client management dashboard"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does commit-to-hours estimation work?",
              a: "We analyze commit timestamps, message complexity, and file change volume to estimate time spent. You can also manually adjust hours before generating an invoice."
            },
            {
              q: "Can I customize the invoice template?",
              a: "Yes. You can add your logo, business details, payment terms, and custom line items. Invoices are exported as professional PDFs ready to send to clients."
            },
            {
              q: "Is my GitHub data secure?",
              a: "We only request read access to your commit metadata — no code is stored. OAuth tokens are encrypted and you can revoke access at any time from your GitHub settings."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        <p>© {new Date().getFullYear()} CommitInvoice. Built for developers who value their time.</p>
      </footer>
    </main>
  );
}
