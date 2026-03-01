import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <section className="relative isolate w-full max-w-160">
        <div className="relative z-10 rounded-(--border-radius) border border-(--lightest-navy)/75 bg-(--light-navy) p-7 shadow-[0_10px_30px_-15px_var(--navy-shadow)] md:p-10">
          <p className="font-mono text-sm text-(--blue)">404</p>
          <h1 className="mt-3 text-[clamp(30px,7vw,46px)] font-semibold leading-tight text-(--lightest-slate)">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-(--light-slate)">
            The page you are looking for is unavailable or may have been moved.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-(--border-radius) border border-(--blue) px-5 py-2.5 font-mono text-sm text-(--blue) transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-(--blue)/10 hover:shadow-[3px_3px_0_0_var(--blue)]"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 z-0 h-full w-full rounded-(--border-radius) border-2 border-(--blue)/80" />
      </section>
    </main>
  );
}
