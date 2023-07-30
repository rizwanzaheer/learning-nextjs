export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>this from root layout!</div>
        {children}
      </body>
    </html>
  );
}
