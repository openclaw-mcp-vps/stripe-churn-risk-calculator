import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Churn Risk Calculator — Predict Subscription Churn',
  description: 'Analyze Stripe subscription patterns to identify customers at high risk of churning. Built for SaaS founders with 100+ subscribers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="817ff7a5-765c-418d-9e95-a8a207aa0232"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
