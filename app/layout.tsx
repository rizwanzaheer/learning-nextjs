import ErrorBoundary from "./error-boundary";

export default function RootLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div>this from root layout!</div>
          {children}
          {analytics}
          {team}
        </ErrorBoundary>
      </body>
    </html>
  );
}
