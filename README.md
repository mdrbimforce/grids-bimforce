# grids-bimforce

Source van **grids.bimforce.com**, de productwebsite van GRiDS. Voorlopige versie (2026-09-28), stap voor stap uit te bouwen.

Stack: Astro 5, Tailwind (design tokens gedeeld met knowledge.bimforce.com en de leja-marketing decks), Cloudflare Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

Opbouw van de homepage (acht blokken, zie leja-brain `documents/quest-139/voorstel-grids-pagina-bimforce-com-2026-09-28.md`):
hero · herkenbare situaties · wat GRiDS doet · zeven functionaliteiten · praktijkvoorbeelden · past in wat je hebt · van wie de data is · aan de slag, plus varianten en FAQ.

Nog te doen: beelden en schermopnames per functionaliteit (Playwright-pijplijn), use cases als content collection, prijzen zodra het aanbod is vastgesteld, flyer als download.
