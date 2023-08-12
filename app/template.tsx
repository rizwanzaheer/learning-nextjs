export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>this is from template!</p>
      {children}
    </div>
  );
}
