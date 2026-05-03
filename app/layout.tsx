import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommitInvoice — Auto-generate invoices from GitHub commits",
  description: "Tracks commits across repos, calculates billable hours based on commit patterns, and generates professional PDF invoices with detailed work breakdowns for freelancers and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4812cc7c-94ba-4ff2-b7c1-c33885473655"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
