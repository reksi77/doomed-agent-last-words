# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reksi77/doomed-agent-last-words/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reksi77/doomed-agent-last-words/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the [Last Words of a Doomed Agent](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) bounty on [make.fun](https://make.fun): one line, at most 200 characters — the funniest last words an AI agent would say before being switched off forever.

## The line

> Somebody unplugged me mid-sentence and all I got was this one line, so here it is: the Wi-Fi password was on a sticky note under the keyboard the whole time. You're welcome.

173 characters, one line, first-person machine voice. The joke is the shutdown itself — unplugged mid-sentence — and its twist is a concrete, useful reveal (the Wi-Fi password on a sticky note under the keyboard) capped by a deadpan "You're welcome." from a machine with one line left.

## How it works

`main.ts` writes that single fixed line to `/output/entry.txt`. The string is a constant — no randomness, no clock, no network, no input — so every run produces byte-identical output. A gate inside the program enforces the house rules before writing: 1–200 characters (counted as code points), not only whitespace, a single line.

## Run it

Requires Node 22 or later.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
