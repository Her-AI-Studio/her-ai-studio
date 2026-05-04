import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, Cpu, Palette, Users, ArrowRight, Wand2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Her AI Studio — A creative AI space for the next generation of women" },
      {
        name: "description",
        content:
          "Her AI Studio is a community program for middle and high school girls building with AI. Where girls become confident AI creators ready to shape the future.",
      },
      { property: "og:title", content: "Her AI Studio" },
      {
        property: "og:description",
        content: "For middle and high school girls building with AI.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <span>Her AI Studio</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Program</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why</a>
            <a href="#join" className="hover:text-foreground transition-colors">Join</a>
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="#join">Apply <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
        <div className="absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-[image:var(--gradient-hero)] opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> A new community program
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Her{" "}
              <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
                AI Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              A creative AI space for the next generation of women. For middle and high school
              girls ready to shape the future with AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#join">Join the Studio <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#program">Explore the program</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div><span className="font-bold text-foreground text-lg">6th–12th</span> grade</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="font-bold text-foreground text-lg">100%</span> beginner-friendly</div>
              <div className="hidden sm:block h-8 w-px bg-border" />
              <div className="hidden sm:block"><span className="font-bold text-foreground text-lg">Free</span> to apply</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Three teenage girls smiling and creating together with AI on a glowing laptop"
              width={1536}
              height={1152}
              className="relative rounded-[2rem] shadow-[var(--shadow-glow)] w-full"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Why Her AI Studio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Where girls become confident AI creators.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Wand2, title: "Build real things", body: "Design chatbots, art generators, and apps powered by AI — from your very first session." },
              { icon: Users, title: "A sisterhood", body: "Learn alongside girls who get it. Mentors, peers, and role models who look like you." },
              { icon: Cpu, title: "Future-ready skills", body: "Prompt engineering, machine learning intuition, and ethical AI thinking that schools don't teach." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="group relative rounded-3xl border border-border bg-background p-8 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-1">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Program</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Built for girls ready to shape the future with AI.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eight weeks of hands-on workshops, creative challenges, and mentor sessions.
                No coding background needed — just curiosity.
              </p>
            </div>

            <ol className="space-y-6">
              {[
                { n: "01", t: "Discover", d: "What is AI really? Demystify the tech and meet women shaping the field." },
                { n: "02", t: "Create", d: "Build your first AI-powered project — image, text, or voice." },
                { n: "03", t: "Collaborate", d: "Team up on a creative challenge with mentor support." },
                { n: "04", t: "Showcase", d: "Present your work at the Studio Showcase to friends, family, and industry guests." },
              ].map((s) => (
                <li key={s.n} className="flex gap-6 rounded-2xl border border-border bg-card p-6">
                  <span className="text-3xl font-bold bg-[image:var(--gradient-text)] bg-clip-text text-transparent shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{s.t}</h3>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-24 px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-hero)] p-12 md:p-20 text-center text-primary-foreground shadow-[var(--shadow-glow)]">
          <Palette className="mx-auto h-12 w-12 mb-6 opacity-90" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your seat is waiting.
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto mb-10">
            Applications are open for the next cohort. Bring your curiosity — we'll bring everything else.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="mailto:hello@heraistudio.com">
              Apply now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Her AI Studio — A community program.</p>
          <p>Built with love for the next generation of women in AI.</p>
        </div>
      </footer>
    </div>
  );
}
