// import NetworkBackground from "../test/network-background";

import NetworkBackground from "../test/network-background";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen antialiased dark">
//       <NetworkBackground nodeCount={25} opacity={0.15} speed={0.2} />
//       {children}
//     </div>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NetworkBackground nodeCount={40} opacity={0.57} speed={0.2} />
      <div className="relative z-1">
        {children}
      </div>
    </div>
  );
}
