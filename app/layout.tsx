import ErrorBoundary from "./error-boundary";

import "../styles/globals.css";

export default function RootLayout({
  children,
  analytics,
  team,
  auth,
  fundingSource,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  auth: React.ReactNode;
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
          {auth}
          {fundingSource}
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
