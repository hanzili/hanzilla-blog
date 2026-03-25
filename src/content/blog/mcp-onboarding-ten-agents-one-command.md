---
title: "Nobody Reads Your Setup Docs"
description: "10 AI agents, 10 config formats. If your user has to edit a config file, you've already lost them."
pubDate: 2026-03-25
tags: ["ai", "mcp", "developer-tools"]
draft: false
---

I build [Hanzi Browse](https://browse.hanzilla.co), a tool that gives AI coding agents a real browser. When I first shipped it, the install instructions were four paragraphs long. Different JSON snippets for different agents. Different file paths for different platforms. The kind of setup where half the people give up before they even try the product.

I thought this was normal. Every developer tool has setup instructions. You read the docs, copy a config block, restart your editor. That's just how it works.

Then I saw a product where the entire install was one command. No docs. No config files. No copy-pasting. And I realized my setup instructions weren't documentation. They were a wall between my product and the people who wanted to use it.

---

## The problem nobody talks about

Right now there are over ten AI coding agents that support MCP — the protocol that lets agents use external tools. Claude Code, Cursor, Windsurf, VS Code, Codex, Gemini CLI, Amp, Cline, Roo Code, Claude Desktop. Every month there are more.

They all support MCP. They all store their config in a different place.

Cursor keeps it in `~/.cursor/mcp.json`. Windsurf puts it in `~/.codeium/windsurf/mcp_config.json`. Claude Desktop uses a path that's different on Mac, Windows, and Linux. Claude Code doesn't even use a config file — it has a CLI command. Cline and Roo Code use `mcp_settings.json` instead of `mcp.json`. Some agents accept comments in their JSON. Some don't.

If you build an MCP tool and want people to actually use it, you have to deal with all of this. Most developers handle it by writing a README section for each agent. Some just write instructions for one agent and add "other agents: see their docs." The user is left to figure it out.

This is the onboarding equivalent of "works on my machine." It technically works. It practically doesn't.

---

## What I learned from two products

[Nia](https://trynia.ai) is a YC S25 company that builds a search layer for AI agents. Their install is:

```bash
npx nia-wizard@latest
```

One command. The wizard opens your browser to sign in, scans your machine for installed agents, and writes the config to each one. It supports over 30 agents. The user never sees a config file.

[Superpowers](https://github.com/obra/superpowers) is a plugin that teaches AI agents skills like test-driven development. They solved a different problem: how do you get useful context into an agent's brain, not just tools into its config?

Their answer: ship your skills as markdown files. Each agent has a skills directory where it discovers new capabilities. Claude Code looks in `~/.claude/skills/`. Cursor looks in `~/.cursor/skills/`. Codex looks in `~/.agents/skills/`. If you put the right files in the right places, the agent automatically learns what your tool does and when to use it.

The insight from Nia: don't make users edit config files. Do it for them.

The insight from superpowers: don't just install your tool. Teach the agent how to use it well.

---

## The pattern

I combined both ideas for Hanzi Browse. The setup command is:

```bash
npx hanzi-browse setup
```

It does three things:

**First, it finds every agent on the machine.** Not by asking the user. By scanning the filesystem. If `~/.cursor` exists, Cursor is installed. If the `claude` binary is on the path, Claude Code is installed. Check ten directories, know exactly what's there.

**Second, it writes the config.** For each agent it finds, it opens the right config file, parses the JSON, adds the MCP entry, and writes it back. The user doesn't touch a file. For Claude Code, which uses a CLI instead of a config file, it runs the CLI command directly.

**Third, it installs skills.** It copies markdown skill files into each agent's skills directory. These files teach the agent when to use the browser, how to structure requests, what the error codes mean, and when to ask the user for confirmation. Without skills, the agent has tools but no playbook. With skills, it knows what it's doing.

The whole thing takes about a minute. At the end, the user restarts their agent and the browser tools are just there. No JSON, no docs, no guessing.

---

## Skills are distribution

This is the part I didn't expect.

An MCP tool gives an agent new capabilities. A skill teaches the agent *when and how* to use those capabilities. The difference matters more than I thought.

Without a skill, my tool gives the agent five functions: start a browser task, send a follow-up, check status, stop, take a screenshot. The agent can read the function descriptions and figure out the basics. But it doesn't know things like: use `curl` for public pages instead of opening a browser. Or: always confirm with the user before posting to social media. Or: if a task times out, take a screenshot before retrying.

A skill file is a few hundred lines of markdown that covers all of this. It gets loaded into the agent's context at the start of every conversation. The agent reads it and acts accordingly.

And here's the distribution angle I didn't see coming: there's a curated list called [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) with over 12,000 stars and a thousand skills listed. Companies like Stripe, Cloudflare, and Vercel publish skills that teach agents how to use their products. Every developer who installs a Stripe skill becomes a Stripe user. The skill is the marketing.

If you build an MCP tool, you should publish skills alongside it. The skill makes your tool work better. And it puts your tool in front of every developer browsing that list.

---

## Why this matters now

The MCP ecosystem is early. Most tools ship with a README and hope for the best. The bar for onboarding is low. Which means the tools that make installation effortless will stand out, not because they're better tools, but because people actually get to try them.

Every step in your setup flow is a place where someone gives up. A config file they have to find. A JSON block they have to paste in the right place. An agent-specific path they have to look up. Each step feels small. Together, they're the reason your tool has ten users instead of a thousand.

The fix is simple in principle: don't tell the user what to do. Do it for them. Scan their machine, write their configs, install your skills. One command. When it's done, the tool just works.

I spent a week studying how other products handle this. Then I spent a day building the wizard. In retrospect, the wizard should have been the first thing I built. Every hour I spent writing setup docs was time I should have spent making setup unnecessary.

Your product isn't done when it works. It's done when people can install it.
