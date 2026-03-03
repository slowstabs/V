---
title: "My First CTF Writeup"
date: "2026-03-03"
tags: ["web", "pwn", "crypto"]
---

# Welcome to my first writeup!

This is a sample writeup that will be automatically parsed constraint by the Next.js setup.

## The Challenge
We were given a vulnerable web application...

## The Solution
1. Inspected the source code
2. Found an SQL injection in the login form
3. Bypassed authentication using `' OR 1=1 --`
4. Got the flag!

```sql
SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = ''
```

Thanks for reading!
