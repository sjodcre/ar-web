export default function Cookies() {
    return (
      <section className="relative min-h-screen w-full bg-background py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
            <p className="mt-2 text-muted-foreground text-sm">Last updated: April 2025</p>
          </div>
  
          <div className="prose dark:prose-invert prose-p:leading-relaxed prose-h2:mt-8 prose-h2:font-semibold">
            <p>We use cookies to enhance your experience. By continuing to use this site, you consent to our use of cookies.</p>
  
            <h2>Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential:</strong> Required for core site functionality.</li>
              <li><strong>Analytics:</strong> Used to understand usage and improve performance.</li>
            </ul>
  
            <h2>Managing Cookies</h2>
            <p>You can manage or disable cookies in your browser settings. Doing so may impact site functionality.</p>
  
            <h2>Third-Party Cookies</h2>
            <p>We may use third-party services that also set cookies, such as analytics tools.</p>
          </div>
        </div>
      </section>
    )
  }
  