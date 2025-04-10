export default function GlossaryPage() {
  return (
    <section className="w-full py-10 px-6 max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">🧠 Permaweb Glossary</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Explore common terms across the Arweave & AO ecosystems. Confused by jargon? Fear not — this sacred scroll shall guide you.
        </p>
      {/* Glossary Embed */}
      <div className="w-full max-w-3xl mx-auto border-5 border-border rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://glossary.permagate.io/?hide-header=true&link-color=%2334d399&bg-color=%231b1b1f&text-color=%23e0e0e0&border-color=%23444444&hover-bg=%23222222&heading-color=%23ffffff&button-bg=%23444444&button-text=%23ffffff&section-bg=%23333333&section-color=%23ffffff&category-bg=%23333333&category-text=%23ffffff&tag-bg=%233a3a3a&tag-text=%23e0e0e0&secondary-text=%23a0a0a0&result-bg=%231e1e1e&result-hover=%23333333"
          className="w-full h-[350px]"
          style={{ border: "none" }}
          title="Permaweb Glossary"
        />
      </div>

      {/* Tribute section */}
      <div className="mb-8 space-y-4">
        

        {/* Altar Tribute */}
        <div className="relative mt-12 inline-block">
          <div className="w-3/4 h-3/4 mx-auto relative">  
            <img
              src="/worship-dp-shade.png"
              alt="dpshade22 avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 font-mono text-secondary text-lg">All praise @dpshade22 🙇‍♂️</div>
          <div className="text-muted-foreground text-sm">
            Creator of the Permaweb Glossary • Enlightener of Lost Souls
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://x.com/dpshade22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-secondary transition"
            >
              X
            </a>
            <a
              href="https://github.com/dpshade/permaweb-glossary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-secondary transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}