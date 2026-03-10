import { AuthHeader } from "../components/auth/AuthHeader";
import { LoginForm } from "../components/auth/LoginForm";
import { PromoPanel } from "../components/auth/PromoPanel";
import { TermsText } from "../components/auth/TermsText";

export function SignInPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#E0F2FE] pb-16">
      <AuthHeader />

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <LoginForm />
              <PromoPanel />
            </div>
          </div>

          <TermsText />
        </div>
      </section>
    </main>
  );
}
