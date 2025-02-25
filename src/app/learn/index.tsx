import { Link } from "react-router-dom";

export default function Learn() {
    return (
        <main className="min-h-screen bg-black text-white p-10">
            <h1 className="text-3xl font-bold">Learn</h1>
            <p className="text-gray-400 mb-6">Explore different topics below:</p>
            <ul className="space-y-4">
                <li>
                    <Link to="/learn/blockchain-arweave-ao101" className="text-blue-400 hover:underline">
                        Arweave and AO 101
                    </Link>
                </li>
                <li>
                    <Link to="/learn/atomic-assets" className="text-blue-400 hover:underline">
                        Atomic Assets
                    </Link>
                </li>
                <li>
                    <Link to="/learn/social-impact" className="text-blue-400 hover:underline">
                        Social Impact
                    </Link>
                </li>
            </ul>
        </main>
    );
}
