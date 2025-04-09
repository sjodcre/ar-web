export default function WarningBanner() {
  const lastUpdated = "April 9, 2025" // Set manually

  return (
    <div className="flex justify-center mt-4 mb-8">
      <div className="relative overflow-hidden px-6 py-4 rounded-lg max-w-3xl text-center">
        {/* Background effects - keeping the blockchain pattern but with higher opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="blockchain-pattern"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-highlight to-accent"></div>

        {/* Content */}
        <p className="text-sm font-medium relative z-10">
          <span className="inline-block bg-secondary/20 text-secondary px-2 py-1 rounded-md mb-2">⚠️ WARNING</span>
          <br />
          Due to the
          <span className="text-highlight font-semibold"> RAPID PROGRESS OF THE ECOSYSTEM</span>, things may{" "}
          <span className="text-highlight font-semibold">CHANGE CONTINUOUSLY</span>.
          <br />
          This site will try to <span className="text-highlight font-semibold">KEEP UP WITH THE LATEST UPDATES</span> as
          best as possible.
          <br />
          <span className="block mt-3 text-secondary font-mono font-bold">Last updated: {lastUpdated}</span>
        </p>
      </div>
    </div>
  )
}


  
  
  // export default function WarningBanner() {
  //   const lastUpdated = "March 6, 2025" // Set manually
  
  //   return (
  //     <div className="ml-0 md:ml-72 p-4 md:p-6">
  //       <div className="max-w-4xl mx-auto">
  //         <div className="relative overflow-hidden bg-card border border-secondary/30 px-6 py-4 rounded-lg shadow-lg text-center mb-6">
  //           {/* Background effects */}
  //           <div className="absolute inset-0 opacity-10">
  //             <div className="blockchain-pattern"></div>
  //           </div>
  //           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-highlight to-accent"></div>
  
  //           {/* Content */}
  //           <p className="text-sm font-medium relative z-10">
  //             <span className="inline-block bg-secondary/20 text-secondary px-2 py-1 rounded-md mb-2">⚠️ WARNING</span>
  //             <br />
  //             Due to the
  //             <span className="text-highlight font-semibold"> RAPID PROGRESS OF THE ECOSYSTEM</span>, things may{" "}
  //             <span className="text-highlight font-semibold">CHANGE CONTINUOUSLY</span>.
  //             <br />
  //             This site will try to <span className="text-highlight font-semibold">KEEP UP WITH THE LATEST UPDATES</span>{" "}
  //             as best as possible.
  //             <br />
  //             <span className="block mt-3 text-secondary font-mono font-bold">Last updated: {lastUpdated}</span>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  
  