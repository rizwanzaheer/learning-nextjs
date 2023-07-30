// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>from home page layout!</div>
      <main>{children}</main>
    </>
  );
}
