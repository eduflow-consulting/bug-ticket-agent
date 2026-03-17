import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bug Ticket Agent - AI-Powered Ticket Enrichment',
  description: 'Transform raw bug reports into comprehensive Jira tickets with AI assistance',
  keywords: 'bug tracking, ticket management, Jira, AI, automation',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://bug-ticket-agent.example.com',
    siteName: 'Bug Ticket Agent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}
