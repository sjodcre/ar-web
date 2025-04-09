"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  UploadCloud,
  Database,
  Cpu,
  Network,
} from "lucide-react"
import WarningBanner from "../warning-banner";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 }
    })
  };
  return (
    <section className="w-full py-12 md:py-20 xl:py-28 particle-container relative space-y-12">
      <div className="grid-lines"></div>
      <div className="digital-rain"></div>
      <div className="hero-glow"></div>
      <div className="blockchain-pattern"></div>

      {/* Hero Text */}
      <div className="container relative z-10 text-center max-w-6xl mx-auto px-6">
        <WarningBanner />
        {/* <motion.h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Web That <span className="text-secondary">Remembers</span> & <span className="text-accent">Thinks</span>
        </motion.h1> */}
        <motion.h1
          custom={1}
          variants={fadeIn}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          The Web That <span className="text-secondary inline-block relative">
            Remembers
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-secondary/30" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,0 C25,5 75,5 100,0 L100,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </span> & <span className="text-accent inline-block relative">
            Thinks
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-accent/30" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,0 C25,5 75,5 100,0 L100,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </span>
        </motion.h1>
        {/* <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Arweave makes data permanent. AO gives it intelligence. Together, they create a new kind of web — where apps and ideas live forever.
        </motion.p> */}
        <motion.p
          custom={2}
          variants={fadeIn}
          className="text-lg pt-8 sm:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Arweave makes data permanent. AO gives it intelligence. Together, they create a new kind of web — where apps and ideas live forever.
        </motion.p>
        <div className="flex justify-center gap-4 pt-8">
          <Button
            size="lg"
            className="bg-white text-black border-1"
            onClick={() => navigate('/learn/arweave-ao-101/arweave/introduction')}
          >
            Find Out More!
          </Button>
          {/* <Button size="lg" variant="outline">
                                RESOURCES
                            </Button> */}
        </div>
      </div>

      {/* 4 Card Features Section */}
      <div className="container relative z-10 max-w-6xl mx-auto text-center px-6 space-y-8">
        {/* Arweave Section */}
        <div>
          {/* <h3 className="text-2xl font-bold text-secondary mb-6 tracking-tight">🌐 Arweave — Memory for the Web</h3> */}
          {/* <motion.h3
            variants={fadeIn}
            custom={0}
            className="text-2xl sm:text-3xl font-bold text-secondary mb-10 tracking-tight text-center"
          >
            🌐 Arweave — Memory for the Web
          </motion.h3> */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            {/* Problem */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-destructive hover:shadow-md">
              <div className="rounded-full bg-secondary/10 p-4">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold">The Internet Forgets</h4>
              <p className="text-center text-muted-foreground text-sm">
                Most sites rely on subscriptions or hosting fees. When those end — your data disappears.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-secondary" />
            </div>

            {/* Solution */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
              <div className="rounded-full bg-secondary/10 p-4">
                <UploadCloud className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold">Arweave Remembers</h4>
              <p className="text-center text-muted-foreground text-sm">
                Upload once. Your files stay online forever across a global network — no renewals needed.
              </p>
            </div>
          </div>
        </div>

        {/* AO Section */}
        <div className="mt-16">
          {/* <h3 className="text-2xl font-bold text-accent mb-6 tracking-tight">🧠 AO — A Brain for the Web</h3> */}
          {/* <motion.h3
            variants={fadeIn}
            custom={0}
            className="text-2xl sm:text-3xl font-bold text-accent mb-10 tracking-tight text-center"
          >
            🧠 AO — A Brain for the Web
          </motion.h3> */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            {/* Problem */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-destructive hover:shadow-md">
              <div className="rounded-full bg-accent/10 p-4">
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-bold">The Internet Doesn’t Think</h4>
              <p className="text-center text-muted-foreground text-sm">
                Most apps today run on big tech servers. If they go down or ban you, your app stops working.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-accent" />
            </div>

            {/* Solution */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
              <div className="rounded-full bg-accent/10 p-4">
                <Network className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-bold">AO Thinks</h4>
              <p className="text-center text-muted-foreground text-sm">
                AO lets your app act like a smart assistant — always ready to help, even when you're offline. It runs without relying on big tech, so you stay in control. Your app, always on.
              </p>
            </div>
          </div>
        </div>


      </div>


      {/* Together Section */}
      <div className="container relative z-10 max-w-4xl mx-auto text-center px-6 space-y-6">
        {/* Arweave & AO Logos */}
        <div className="flex justify-center gap-10 pt-2">
          <div className="flex flex-col items-center space-y-1 text-secondary">
            <Database className="h-10 w-10" />
            <div className="font-bold">Arweave</div>
            <div className="text-xs">Permanent Storage</div>
          </div>
          <div className="flex flex-col items-center space-y-1 text-accent">
            <Cpu className="h-10 w-10" />
            <div className="font-bold">AO</div>
            <div className="text-xs">The Computer</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground">🌍 Together, They Change the Web</h2>
        <p className="text-muted-foreground text-base">
          {/* Arweave gives the internet memory. AO gives it a brain. */}
          Build systems that remember, learn, and grow — all on the web itself.
        </p>
      </div>

      {/* Who It's For */}
      {/* <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center text-foreground">👥 Who It’s For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "📸", title: "Creators", desc: "Publish blogs, videos, or apps that stay online permanently." },
            { icon: "🤖", title: "Builders", desc: "Deploy autonomous agents and smart bots." },
            { icon: "📚", title: "Archivists", desc: "Store cultural records, research, and public data." },
            { icon: "🏛️", title: "Governance & DAOs", desc: "Log votes, documents, and decisions for public accountability." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4 transition hover:shadow-md hover:border-secondary/30 text-sm"
            >
              <h3 className="text-lg font-semibold mb-1">{item.icon} {item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Why It Matters */}
      {/* <div className="container relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold mb-2 text-foreground">🌐 Why This Matters</h2>
        <p className="text-muted-foreground text-base">
          Most of the internet today is disposable. But Arweave and AO let us build things that last —
          memory, logic, culture, intelligence — all on open infrastructure that anyone can access.
        </p>
      </div> */}
    </section>
  )
}
