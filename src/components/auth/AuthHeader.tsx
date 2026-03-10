export function AuthHeader() {
  return (
    <section className="pt-28 pb-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077B6] text-sm font-black text-white">
            S
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
            SPORTICO
          </span>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
          Welcome to SPORTICO
        </h1>
        <p className="mt-3 text-sm text-[#64748B] sm:text-base">
          Sign in to your account to continue
        </p>
      </div>
    </section>
  )
}

