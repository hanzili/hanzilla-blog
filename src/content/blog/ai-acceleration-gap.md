---
title: "AI Is Ready. Most Companies Aren't."
description: "AI can do the work. The problem is letting it."
pubDate: 2026-02-23
tags: ["ai", "startups", "tech"]
draft: false
---

If you're an engineer right now, you probably already have an AI agent that can see your codebase, write code, run commands, and push changes. Cursor, Claude Code, Copilot. These tools understand your entire project and can actually do things in it. Not suggest things. Do things.

I'm a student who builds things on the side, and this is how I work every day. I have Claude Code connected to everything. Linear for tasks, Railway for deployments, Sentry for errors, PostHog for analytics. When something breaks, the AI sees the error, reads the logs, checks the code, and fixes it. Most of my time is spent directing AI and stepping in only when it hits something it genuinely can't handle yet.

The reason this works is that I control all the access. I decide what Claude Code can see, what it can do, and when I need to step in. There's no compliance team, no audit requirements, no risk of someone accidentally giving AI access to something it shouldn't see. It's just me.

For companies, that's the whole problem.

---

You can tell the demand is real by watching what employees actually do. More than half are using AI tools their company never approved. Pasting contracts into ChatGPT, running customer emails through free AI tools, uploading financial data to random apps. No controls, no audit trail. They do it anyway because the productivity gains are too obvious to ignore.

This is usually framed as a security problem. I think it's something else. These employees are telling you exactly which parts of their work need AI. Your legal team is pasting contracts into ChatGPT because there's no approved tool that can review them. Your sales team is drafting emails with customer data in a free account because the CRM's built-in AI isn't good enough. It's the most honest product feedback you'll ever get.

So why not just build the safe version? Connect AI to the right systems with the right permissions?

Because access isn't binary. It's about how much AI can do, for whom, and for what.

Think about a sales manager's day. Summarizing meeting notes? Low stakes, AI can just do it. Updating a deal in the CRM? Fine, go ahead. Drafting a follow-up email to a client? Let AI write it, but review before sending. Putting together a pricing proposal for a major account? AI prepares the analysis, human makes the call. Same person, same AI, but different levels of trust depending on what the task is and what's at risk.

That's what good AI access looks like. Not an on/off switch. A system that knows: this person, this task, this level of risk, this is how much autonomy the AI gets. And someone always accountable for the outcome.

---

Some companies have figured this out for specific domains. Harvey built it for legal, where every AI action feeds through a workflow that ensures a lawyer reviews and signs off. Sierra built it for customer service, with escalation rules that decide when AI handles things alone and when it loops in a human. They went deep into one world and got the trust model right.

But they're islands. Each one built its own access controls from scratch, for one specific domain. None of them connect to each other. A company using both still has two separate AI systems that can't share context. And for every domain they've solved, there are dozens nobody has touched.

General tools are trying to go the other direction. Claude Cowork gives non-engineers a real AI agent that can work with files, browse the web, and connect to tools through MCP. The AI capability is genuinely there. But its enterprise controls are still just an organization-wide on/off switch. No role-based access. No audit logs. No way to say "marketing gets read access, finance gets read-write with approval, interns get nothing."

---

But when I look at the landscape, the pieces are starting to appear. MCP connectors that can link AI to basically any system. Gateways that can enforce role-based access and log every action. Shadow AI monitoring that can show where the demand is. AI clients that can give non-engineers real agents. They're separate products, built by different companies, solving different slices of the problem. But together they start to look like the infrastructure for exactly the kind of governed access I described.

I don't know what it looks like when someone actually wires them together inside a real company. There are probably a hundred problems I'm not seeing from my one-person setup. But the building blocks are there, and the direction feels clear.

---

The people and companies that figure out how to give AI the right access, for the right people, at the right level of trust, are going to pull ahead in a way that's hard to catch up to. Not because they're smarter. Because they understood that the bottleneck was never intelligence.

It was always access.
