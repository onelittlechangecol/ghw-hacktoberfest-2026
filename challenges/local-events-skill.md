# Skill: Find local events (browser workflow)

## Input
- `topic` (keyword, e.g. "AI") and/or `city` (e.g. "Bangkok")
- `week` (start and end date, interpreted in Asia/Bangkok)

## Steps
1. Open a public events calendar for the city (e.g. `https://lu.ma/<city>`). No login.
2. Read the listed events. Keep those whose start date falls inside `week` and whose title matches `topic` (case-insensitive, whole word).
3. Sort by start date/time. For each result record: Event, Date and time (with time zone), Location, Registration URL, Source URL, Checked at (ISO time in Asia/Bangkok when the page was read).
4. Return at least 3 results when that many exist; otherwise return what exists.

## Rules
- Always record the source URL and check time for every result.
- If nothing matches, report **"no matches"**. Never guess or invent events, dates, or locations; use `Unknown` for missing fields.
- Stop and report if the page is blocked (login wall, CAPTCHA, 403) or if the next step would be a sensitive action.
- Never register, RSVP, book, send messages, or purchase anything without explicit user approval.

## Output
A CSV/table with the columns above, plus the input used.
