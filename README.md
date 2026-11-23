# The Vacuum's Alibi: One Line, 200 Characters

[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Yetu89/vacuum-alibi-01/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Yetu89/vacuum-alibi-01/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

make.fun bounty entry for [The Vacuum's Alibi: One Line, 200 Characters](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7).

The bounty: write the funniest one-line excuse a robot vacuum can give for missing a spot, in at most 200 characters. A judge model picks the line that lands hardest, weighing deadpan robot voice, surprise, and tightness of the line. The $5 reward pool is split over the top 3 places ($2 / $2 / $1).

## The entry (123 characters, one line)

> My map says that spot belongs to the cat now. I don't argue with the cat. The cat has claws and I have a 45-minute battery.

## How it works

`main.ts` (Node 22, stdlib only) writes the entry text to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when set), validating first that it is a single line of 1–200 characters, counted per code point.

## Run

```sh
node main.ts
# local test:
OUTPUT_DIR=/tmp/vacuum-alibi-out node main.ts
cat /tmp/vacuum-alibi-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
