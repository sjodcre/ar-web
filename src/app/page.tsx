import CodeExample from "@/components/landing/code-example";
import Community from "@/components/landing/community";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { SeoHead } from "@/components/SeoHead";

export default function Home() {
    return (
        <>
            <SeoHead
                title="Arweave and AO/AOtheComputer Documentation"
                description="All you need to know about Arweave and AOtheComputer/AO."
                image="https://sjodcre-ar-web_arlink.arweave.net/images-webp/arweave-light-seal-1200x630.webp"
                url="https://sjodcre-ar-web_arlink.arweave.net/"
            />
            <Hero />
            <Features />
            <CodeExample />
            <Community />
        </>
    )

}