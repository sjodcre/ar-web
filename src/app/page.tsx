// import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* <Navbar /> */}
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Gradient decorations */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-full transform translate-x-1/2 translate-y-1/2" />

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                            Powerful for developers.
                            <br />
                            Fast for everyone.
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Build on the world's first computational storage network. AO brings unlimited compute to Arweave's
                            permanent storage.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                START BUILDING
                            </Button>
                            <Button size="lg" variant="outline">
                                RESOURCES
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <p className="text-center text-sm text-blue-500 tracking-wider mb-12">
                    POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
                    {/* Replace with actual partner logos */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-12 w-32 bg-white/10 rounded" />
                    ))}
                </div>
            </div>
        </main >


    )
}
