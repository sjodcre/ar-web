import { useEffect, useState } from "react";

export default function BlockchainArweaveAO101() {
    const [content, setContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const manifestUrl = "https://arweave.net/0eRcI5PpUQGIDcBGTPCcANkUkgY85a1VGf0o7Y-q01o"; // Manifest file

    useEffect(() => {
        async function fetchContent() {
            try {
                // Step 1: Fetch the manifest file
                const manifestResponse = await fetch(manifestUrl);
                if (!manifestResponse.ok) throw new Error("Failed to fetch manifest");
                
                const manifestData = await manifestResponse.json();
                
                // Step 2: Extract the actual content ID
                const contentId = manifestData.paths?.["index.html"]?.id;
                if (!contentId) throw new Error("Content ID not found in manifest");

                // Step 3: Fetch the actual content
                const contentUrl = `https://arweave.net/${contentId}`;
                const contentResponse = await fetch(contentUrl);
                if (!contentResponse.ok) throw new Error("Failed to fetch content");

                const text = await contentResponse.text();
                setContent(text);
            } catch (err) {
                console.error("Error loading Arweave content:", err);
                setError("Failed to load content.");
            }
        }

        fetchContent();
    }, []);

    return (
        <main className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Blockchain, Arweave, and AO 101</h1>
            <div className="bg-gray-900 p-4 rounded-md">
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : content ? (
                    <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    <p>Loading content...</p>
                )}
            </div>
        </main>
    );
}
