---
title: "The Plaid Moment for Enterprise AI"
description: "Why the real AI infrastructure problem isn't models. It's that legacy systems don't have APIs."
pubDate: 2026-02-23
tags: ["ai", "startups", "tech"]
draft: true
---

DRAFT NOTES — not ready to publish

## Core Idea

Three layers of abstraction, each built for a different consumer:
- GUI → built for humans (eyes and hands)
- API → built for systems (structured data exchange)
- MCP → built for AI agents (semantic layer, natural language tool use)

Most enterprise legacy systems only have GUI. To give AI real access, you need to build the missing layers.

## Bell Canada / DECO Story (from conversation with DECO founder)

- DECO (deck.co) just signed a contract with Bell Canada
- Bell has thousands of customer service employees doing repetitive work: reading emails, searching tickets, checking knowledge base, replying, doing follow-ups
- The software is on-prem, license-based, no web interface, just desktop GUI
- DECO's solution: computer-use agent that navigates the GUI, clicks through interfaces, does the job
- Why not API integration? Because the legacy software doesn't have APIs. It's on-prem desktop software built for humans only
- Data migration to modern systems would be a billion-dollar project and very risky

## Why Computer-Use Is a Workaround, Not a Solution

- Every action = vision model call (screenshot → understand → decide → click → verify). Expensive
- A simple "look up a ticket" that takes a human 3 clicks might take 5-10 model calls
- Each call carries heavy image tokens
- Slow: seconds per operation vs milliseconds for API
- Fragile: UI changes break everything
- Hard to scale: each agent needs its own browser/screen instance
- API would be 10-100x cheaper per operation

## The Flinks/Plaid Model Applied to Enterprise

- Flinks (Canadian fintech): banks had legacy systems with no API, only web portals. Flinks connected to those portals, structured the data, exposed clean REST APIs. Plaid did the same in the US. Open banking was built on this pattern.
- Same model for enterprise legacy systems:
  1. Don't touch the underlying system
  2. Figure out how data gets in and out (database? CLI? COM/OLE? screen scraping as last resort?)
  3. Expose as standard API
  4. AI agents connect via MCP to these APIs
- Benefits: 10-100x cheaper than computer-use, much less risky than migration, stable (not dependent on UI), AI agents use it like any modern SaaS API

## Market Landscape for Context

Two types of companies doing different layers:
- GUI → API: Flinks/Plaid model. Turning human interfaces into programmatic interfaces
- API → MCP: Composio/Workato model. Wrapping existing APIs into AI-usable tools
- Almost nobody doing GUI → API → MCP end-to-end
- DECO's approach: GUI → AI directly (computer-use), skipping the middle layers. Fast but expensive

## The Bigger Picture

- Every large enterprise has dozens of legacy on-prem systems
- They won't disappear. Migration is too expensive and risky
- But everyone wants AI agents
- Whoever wraps these old systems into APIs becomes the Plaid of enterprise AI
- This connects to the "access" thesis: the bottleneck isn't intelligence, it's access. Legacy systems are the extreme version of the access problem — there's no API to connect to at all

## Possible Article Structure

1. Open with Bell Canada story (concrete, specific)
2. DECO's computer-use approach and why they chose it
3. The limitation: computer-use is a workaround
4. The Flinks/Plaid parallel
5. The three-layer abstraction: GUI → API → MCP
6. This might be the Plaid moment for enterprise AI
