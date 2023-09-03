import ErrorBoundary from "./error-boundary";

import "../styles/globals.css";

export default function RootLayout({
  children,
  analytics,
  team,
  fundingSource,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  fundingSource: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div>this from root layout!</div>
          {analytics}
          {team}
          {fundingSource}
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
