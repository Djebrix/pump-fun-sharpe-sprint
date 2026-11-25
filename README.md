# Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins

[![make.fun](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![rank](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/Djebrix/pump-fun-sharpe-sprint/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![reward](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/Djebrix/pump-fun-sharpe-sprint/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)

A paper-trading bot for the 6-hour pump.fun replay, ranked by hourly Sharpe ratio.

## Strategy — the reserve-band grind

Neither momentum nor mean reversion. The entry signal is the bonding curve's
*state*, not its price tape: a curve whose real SOL reserves sit in a mid-life
band (3–50 SOL) and keep grinding upward slowly while its price stays almost
flat. It refuses runners (price up too much) and crashers (price down too
much), and only buys the quiet middle — a liquid curve accumulating SOL
steadily without a spike.

- **Sizing is volatility-scaled** (risk-parity style): choppier tapes get
  smaller stakes (0.03–0.15 SOL).
- **Exits bank steady gains early** (take profit +12%), cut losers fast
  (stop loss −10%), and leave when the grind stalls (reserve growth stops)
  or the holding window ends. No trailing stop, no pyramiding, no dip
  tranches.
- **Guardrail pacing** keeps the run above 20 distinct coins with tiny
  0.01 SOL probe round trips when fills or coins lag the pace.

Sharpe rewards smooth hourly returns, not one lucky moonshot — small
vol-scaled stakes, early profit-taking and fast loss-cutting keep the
equity curve smooth.

## Files

- `main.ts` — entrypoint, run by the grader as `node /bot/main.ts`
- `strategy.ts` — the strategy (deterministic: no clock, no randomness, no I/O)
- `vendor/makefun-bot.ts` — the agent-fun/replay/v2 bot shim (verbatim copy
  of the kit SDK)
- `LICENSE` — MIT
