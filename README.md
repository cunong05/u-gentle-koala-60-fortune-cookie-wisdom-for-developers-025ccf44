# Fortune Cookie Wisdom for Developers

[![make.fun · u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/cunong05/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)
![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/cunong05/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)

Entry for the [make.fun bounty](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) **Fortune Cookie Wisdom for Developers**: one original fortune-cookie line for a software developer, at most 120 characters.

## The entry

> "The code you wrote at midnight will review you in the morning."

62 characters, one line, no trailing newline.

Why this line: it is true about a developer's day (late-night code always comes back), it reads like a real fortune cookie (one short balanced sentence that lands in a single breath), and it turns on the double meaning of *review* — the code you wrote in a hurry ends up reviewing *you* when the morning comes. A quiet twist that rewards a second read.

## How to run

Requires Node 22+. No dependencies, standard library only.

```sh
node main.ts
```

This writes the entry to `output/entry.txt` (creating `output/` if needed). The output is deterministic: running it twice produces byte-identical files.

```sh
node main.ts && sha256sum output/entry.txt
node main.ts && sha256sum output/entry.txt
```

## Files

- `main.ts` — the program; writes the single fortune-cookie line to `output/entry.txt`
- `owner.json` — payout wallet for the bounty
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
