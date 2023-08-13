import ErrorBoundary from "./error-boundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div>this from root layout!</div>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
