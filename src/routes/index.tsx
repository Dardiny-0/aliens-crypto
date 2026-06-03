import { createFileRoute } from "@tanstack/react-router";
import { AlienSite } from "@/components/AlienSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$ALIENS | They Walk Among Us – Official Solana Meme Coin" },
      {
        name: "description",
        content:
          "$ALIENS — the official 2026 declassified Solana meme coin. Abduct the market with the cutest alien in crypto. They Walk Among Us.",
      },
      { property: "og:title", content: "$ALIENS | They Walk Among Us" },
      {
        property: "og:description",
        content:
          "The official 2026 declassified Solana meme coin. Probe the dips, beam up the gains.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AlienSite,
});
