---
title: Brioche
---

import BakingStep from "@site/src/components/BakingStep";
import Percent from "@site/src/components/Percent";

export const i = {
  'farine': 320,
  'lait': 70,
  'levuref': 15,
  'sel': 5,
  'sucre': 40,
  'beurre': 100,
  'oeufs': 100
}

## Recette

1 brioche:

- Farine forte manitoba oro: {i.farine}g
- Beurre doux: {i.beurre}g <Percent reference={i.farine} value={i.beurre} showSign/>
- Lait: {i.lait}g <Percent reference={i.farine} value={i.lait} showSign/>
- Levure fraiche: {i.levuref}g <Percent reference={i.farine} value={i.levuref} showSign/>
- Sucre: {i.sucre}g <Percent reference={i.farine} value={i.sucre} showSign/>
- Oeufs: {i.oeufs}g <Percent reference={i.farine} value={i.oeufs} showSign/>
- Sel: {i.sel}g <Percent reference={i.farine} value={i.sel} showSign/>
- Jaune d'oeuf pour dorser: 1

1. Melanger tout sauf beurre.
1. Une fois gluten developpé, ajouter le beurre mou petit a petit.
1. Laisser lever.
1. Optionel: Frigo pour 10h.
1. Mise en forme (tresse 1 brin).

   <div class="youtube-video-container">
   <YouTube id="nK1XyZcSKNU" />
   </div>
1. Seconde poussée.
1. <BakingStep temp="150" time="35min (92c a coeur)" fan preheat />

## Sources

<div class="youtube-video-container">
  <YouTube id="5d9eUgVhRn8" />
</div>

import YouTube from '@site/src/components/YouTube'

<YouTube id="QqBKaLnUw5A" />
