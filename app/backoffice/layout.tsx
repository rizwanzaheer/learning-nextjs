import ErrorBoundary from "../error-boundary";

export default function BackOfficeLayout({
  children,
  analytics,
  auth,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  auth: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <div>this is from Back office layout!</div>
      {analytics}
      {team}
      {auth}
      {children}
    </ErrorBoundary>
  );
}
