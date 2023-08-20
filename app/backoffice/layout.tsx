import ErrorBoundary from "../error-boundary";

export default function BackOfficeLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <div>this is from Back office layout!</div>
      {analytics}
      {team}
      {children}
    </ErrorBoundary>
  );
}
