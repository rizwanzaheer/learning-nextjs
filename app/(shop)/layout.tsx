// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>shop shared layout!</div>
      <main>{children}</main>
    </>
  );
}
