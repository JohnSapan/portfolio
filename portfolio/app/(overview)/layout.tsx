import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from 'app/components/nav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="flex-auto min-w-0 mt-12 2xl:mx-52 md:ml-52 px-2 md:px-0 ">
        {children}
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}