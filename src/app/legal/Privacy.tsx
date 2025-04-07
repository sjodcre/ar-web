export default function Privacy() {
    return (
      <section className="relative min-h-screen w-full bg-background py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-muted-foreground text-sm">Last updated: April 2025</p>
          </div>
  
          <div className="prose dark:prose-invert prose-p:leading-relaxed prose-h2:mt-8 prose-h2:font-semibold">
            <p>This policy outlines how we collect, use, and protect your personal information.</p>
  
            <h2>What We Collect</h2>
            <ul>
              <li>IP address</li>
              <li>Device and browser info</li>
              <li>Interaction data (e.g., clicks, page views)</li>
            </ul>
  
            <h2>How We Use Your Data</h2>
            <p>We use your data to improve the website, understand usage patterns, and detect abuse.</p>
  
            <h2>Sharing and Storage</h2>
            <p>We do not sell your data. Data may be shared with analytics providers for usage reporting.</p>
  
            <h2>Your Rights</h2>
            <p>You may request access to your data or request deletion by contacting us.</p>
          </div>
        </div>
      </section>
    )
  }
  