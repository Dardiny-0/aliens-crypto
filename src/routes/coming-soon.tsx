import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Radar } from "lucide-react";
import { Starfield } from "@/components/Starfield";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — $ALIENS" },
      {
        name: "description",
        content:
          "This signal is still being decrypted. The $ALIENS team is finalizing this transmission — check back shortly.",
      },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <Starfield count={90} />
      <div className="relative z-10 max-w-xl w-full text-center card-cyber rounded-2xl p-10 sm:p-14 scan-line">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-[10px] font-display tracking-[0.3em] text-primary mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          TRANSMISSION INCOMING
        </div>
        <Radar
          className="mx-auto mb-6 h-14 w-14 text-primary animate-pulse-glow"
          strokeWidth={1.4}
        />
        <h1 className="font-display font-black text-4xl sm:text-5xl text-primary text-glow">
          COMING SOON
        </h1>
        <p className="mt-5 text-muted-foreground">
          This signal is still being decrypted. The mothership will broadcast
          this destination shortly. Stay tuned for the next transmission.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 font-display font-bold tracking-wider text-primary hover:bg-primary/10 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          RETURN TO BASE
        </Link>
      </div>
    </main>
  );
}
