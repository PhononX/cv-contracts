# Decision: Revert thread_id — Restore parent_message_id as Non-Deprecated

**Date:** 2026-05-29  
**Affects:** `MessageV5`, `WebhookMessage`, and all downstream JSON schemas  
**Commit that introduced the change being reverted:** `f68af9c`

---

## What Changed

### Introduced in `f68af9c` (now reverted)

- `thread_id` was added to `MessageV5` and `WebhookMessage` as the *preferred* replacement for `parent_message_id`
- `parent_message_id` was marked `@deprecated` with a removal target of 2026-11-01
- Both fields coexisted in the contract during a transition window

### This reversion (current state)

- `thread_id` has been **removed entirely** from all interfaces and JSON schemas
- `parent_message_id` has been **restored as a first-class, non-deprecated field**
- `idempotency_key` was introduced in the same commit and is **kept** — this revert only affects `thread_id`

### Files changed

| File | Change |
|---|---|
| `src/interfaces/v5/MessageV5.ts` | Removed `@deprecated` JSDoc from `parent_message_id`; deleted `thread_id` field |
| `src/interfaces/webhook/WebhookMessage.ts` | Same as above |
| `src/schemas/v5/MessageV5Schema.ts` | Removed `thread_id` property block and enum value |
| `src/schemas/v5/GetMessageResponseV5Schema.ts` | Removed `thread_id` property block |
| `src/schemas/webhook/WebhookMessageSchema.ts` | Removed `thread_id` property block and enum value |
| `src/schemas/webhook/AIPromptResponseSchema.ts` | Removed `thread_id` property block |

---

## Why

The `thread_id` rename was reviewed and the team decided it was not the right direction:

- **No clear consumer benefit** — renaming a stable, well-understood field (`parent_message_id`) to `thread_id` introduces a migration cost for all existing API consumers with no functional gain
- **`parent_message_id` is already clear** — the field name accurately describes a reply-to relationship; `thread_id` is ambiguous (it could mean a conversation thread, a message thread, a system thread, etc.)
- **Breaking change overhead** — maintaining both fields during the deprecation window increases contract surface area and testing complexity
- **Decided to keep** `idempotency_key` — that field adds genuine new capability (message creation deduplication) and was not part of this rollback

---

## Contract Stability Guarantee

`parent_message_id` is **not deprecated** and has **no scheduled removal**. Consumers should use it as the canonical field for identifying the parent message in a threaded reply.
