export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <div className="mt-2 space-y-3 leading-7">{children}</div>
    </section>
  );
}

export function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-medium text-zinc-900">{children}</h3>;
}
