'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';

export default function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="space-y-8 text-center max-w-2xl">
        {/* Header */}
        <div className="space-y-4">
          <div className="text-5xl font-bold">🐛</div>
          <h1 className="text-4xl font-bold tracking-tighter">
            Bug Ticket Enrichment Agent
          </h1>
          <p className="text-xl text-gray-600">
            Transform raw bug reports into comprehensive, actionable Jira tickets with AI assistance
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2 text-left">
          {[
            { title: 'AI-Powered Enrichment', desc: 'Interactive chat to gather context' },
            { title: 'Jira Integration', desc: 'Automatic ticket creation' },
            { title: 'SSE Streaming', desc: 'Real-time agent responses' },
            { title: 'Multi-User', desc: 'Role-based access control' },
          ].map((feature) => (
            <div key={feature.title} className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          {isAuthenticated ? (
            <>
              <Button size="lg" asChild>
                <Link href="/dashboard/tickets/new">Create New Ticket</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard/tickets">View Tickets</Link>
              </Button>
            </>
          ) : (
            <>
              <Button size="lg" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 pt-8 border-t">
          <p>🏢 Dresden Engineering Team | 📍 Saxony, DE | ✅ Production Ready</p>
        </div>
      </div>
    </main>
  );
}
