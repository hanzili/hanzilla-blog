---
title: "I Hacked My Laundry Card. Here's What I Learned."
description: "A CS student's experience using a Flipper Zero and AI to reverse-engineer an NFC laundry card, and some thoughts on what it means for systems like these."
pubDate: 2026-03-11
tags: ["ai", "security", "tech"]
draft: false
---

It started at a CTF competition. I'd been using Claude Code to work through the challenges and ended up scoring the most points out of all individual participants. The prize was a Flipper Zero. Walking home, I looked at the laundry card I use every week, a plain white NFC card for the machines in my building, and thought: I wonder if this works in real life too?

It does.

The card was a Mifare Classic 1K, a contactless NFC card used by CSC ServiceWorks, the largest commercial laundry operator in North America. They operate over a million machines across 127,000 apartment buildings and 1,300 universities.

I'm a CS student. I had never touched NFC security before. I had no idea what a Mifare Classic was, how sectors and blocks worked, or what a "value block" format looked like.

I had my new Flipper Zero and Claude Code. I pointed both of them at my laundry card.

Within an hour, I had reverse-engineered the card format, figured out the balance encoding, and discovered an architectural flaw that makes every deduction reversible. After each wash, the card's balance can be restored to what it was before. The machine accepts it every time. Load the card once with any amount, and you can reset it back after every use. Unlimited credit from a single reload.

The Mifare Classic cipher has been broken since 2008. Security researchers have known about these issues for over a decade. None of what I found is new. What's new is that someone with no background in any of this could do it in an hour.

---

Here's the technical version for those who care.

The card stores your balance in a "value block," a 16-byte structure where the first two bytes are your balance in cents and the upper bytes track a transaction counter. Block 4 holds the balance. Block 8 is a backup copy. They need to match.

There's also a "balance certificate," three bytes that act as a signature over the last reload. The reload machine (where you add money) computes this certificate. The washer checks it. But when the washer deducts money for a wash, it only updates the balance. It doesn't recompute the certificate. It can't. It doesn't have the key.

So you can always restore the card to its last reload state. The certificate is still valid because it was never changed. The balance is back to what it was. The machine accepts it.

This works because the system separates writing from validating. The reload machine signs the data. The washer trusts the signature but can never create a new one. Every deduction can be undone.

Here's what it looks like in practice. The card starts empty. The machine rejects it. I tap it on my Flipper Zero, which writes the saved reload data back to the card in seconds. I scan it again. The machine accepts it.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/TODlPNEaAZs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Here's the part I keep thinking about.

I didn't read a single datasheet. I didn't study any specification. I connected my Flipper Zero over USB, and an AI wrote the serial communication scripts for me. When I read the raw data off the card, it analyzed the layout, identified the balance encoding, and spotted the differences between two cards with different balances. When I hit an error on the machine, it searched for documentation and figured out what the machine was actually checking.

The whole thing took about an hour. That doesn't say anything special about me. It says something about how much AI changes the accessibility of this kind of work.

That same week, I did something similar in a completely different domain. I took a Chrome extension with 5 million users and 30,000 ratings, one with a paywall checked entirely in the browser with no server involved, and understood its protection in minutes. Different technology, same observation: when the security logic lives on the device you're holding and not on a server, the only thing protecting it is how hard it is to understand. AI makes that part much easier.

---

When I mentioned using AI at the CTF event, some of the organizers and security people pushed back. They said using AI to solve challenges "wasn't encouraged."

I understand where they're coming from. CTFs are meant to test your knowledge, and using AI can feel like it defeats the purpose. But there's a disconnect between what we practice in competitions and what happens in the real world. Real attackers use every tool available. If someone with no security background can use AI to find exploitable flaws in real systems, the security community should be reckoning with that, not pretending it doesn't exist by banning it from practice environments.

---

This vulnerability has existed for 17 years. CSC is still a massive company. The actual financial damage from card fraud is probably small. The status quo has clearly been fine for a long time.

But the economics of exploiting these systems are shifting.

Someone who knew NFC protocols could have done this years ago. But that person could only exploit their own card, in their own building. The security researchers who found these flaws weren't going to build an app and distribute it. That's not what they do. So the damage stayed contained.

AI changes the entire chain. Not just finding the vulnerability, but understanding the system, writing tools, and building something distributable. Before, you needed deep security knowledge AND software skills in the same person to turn a flaw into a product. That combination was rare. AI makes it much less rare. The same tool that helped me crack a card in an hour could help someone package it into an Android app. You don't even need a Flipper Zero. Some phones with NFC can read and write these cards directly.

This isn't just about laundry cards. Any system that stores its security on the client, with no server checking whether the data is legitimate, has a version of this problem. NFC cards, offline payment terminals, desktop software with local license checks, browser extensions with client-side paywalls. These systems survived because the knowledge to break them was specialized. AI is making that knowledge accessible to anyone who's curious enough to ask.

For the offline systems, there's an added problem: no server logging transactions, no backend flagging anomalies. The device is the entire system. If someone writes bad data, there's no way to detect it. A software update can't fix it. The only fix is replacing the hardware.

---

I disclosed this vulnerability to CSC ServiceWorks before publishing.

![Disclosure email sent to CSC ServiceWorks](/images/csc-disclosure-email.jpg)

I don't know what percentage of their machines still use these cards. The company announced a partnership with PayRange in early 2025 to modernize payments, so they may already be upgrading. But the card I used last week, in my building, in 2026, was still a Mifare Classic with encryption from 2001.

The fix exists. My McGill student card stores its balance on a server. The card is just an ID. Cloning it doesn't create money. Montreal's transit card uses real encryption with backend checks. The technology has been there for years.

The problem is incentives. There hasn't been enough reason to upgrade. If my experience is any indication, the window for that to stay true is getting shorter.
