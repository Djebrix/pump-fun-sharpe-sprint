// Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins.
// Entry: the reserve-band grind strategy (strategy.ts). Runs under the grader as
// `node /bot/main.ts` (Node strips the types; no build, no install).

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy } from './strategy.ts';

// One strategy instance for the whole run: its tapes and positions persist across batches.
const bot = createStrategy();

await runBot({
  onBatch(state, batch) {
    return bot.onBatch(state, batch);
  },
});
