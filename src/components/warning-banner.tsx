export default function WarningBanner() {
    const lastUpdated = "March 6, 2025"; // Set manually

    return (
        <div className="flex justify-center mt-4">
            <div className="bg-gray-800 text-yellow-400 border border-yellow-500 px-6 py-3 rounded-lg max-w-3xl shadow-lg text-center">
                <p className="text-sm font-medium">
                    ⚠️ Due to the 
                    <span className="text-yellow-300 font-semibold uppercase shadow-yellow-500"> RAPID PROGRESS OF THE ECOSYSTEM</span>, 
                    things may <span className="text-yellow-300 font-semibold uppercase shadow-yellow-500">CHANGE CONTINUOUSLY</span>.
                    <br />
                    This site will try to <span className="text-yellow-300 font-semibold uppercase shadow-yellow-500">
                    KEEP UP WITH THE LATEST UPDATES</span> as best as possible.
                    <br />
                    <span className="block mt-2 text-yellow-200 font-bold text-lg">
                        Last updated: {lastUpdated}
                    </span>
                </p>
            </div>
        </div>
    );
}
