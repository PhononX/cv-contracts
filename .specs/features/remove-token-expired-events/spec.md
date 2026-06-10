# Feature: Remove `access_token.expired` & `refresh_token.expired` webhook events

**Status:** Specified
**Scope:** Small (2 files, breaking change to a published contract enum)
**Date:** 2026-06-10

## Problem

Backend no longer supports the webhook subscription events `access_token.expired`
and `refresh_token.expired`. These events must be removed from the contracts package
so consumers stop referencing event names the backend will never emit.

## Goal

Remove all occurrences of the two token-expiry webhook events from `cv-contracts`.

## Occurrences (verified)

| File | Lines | Content |
|---|---|---|
| `src/enums/webhook/SubscriptionEvents.ts` | 37–40 | `WEBHOOK_ACCESS_TOKEN_EXPIRED`, `WEBHOOK_REFRESH_TOKEN_EXPIRED` + their section comment |
| `src/schemas/webhook/WebhookPayloadSchema.ts` | 81–82 | `'access_token.expired'`, `'refresh_token.expired'` in the `SubscriptionEvents` enum |

No other references exist in `src/` (verified via grep). The interface
`WebhookPayload.ts` types `eventName` as `SubscriptionEvents` and needs no change.

## Requirements

- **R1** — Remove `WEBHOOK_ACCESS_TOKEN_EXPIRED` and `WEBHOOK_REFRESH_TOKEN_EXPIRED`
  members (and their `// Webhooks Events...` section comment) from `SubscriptionEvents.ts`.
- **R2** — Remove the two corresponding string literals from the generated
  `WebhookPayloadSchema.ts`. The schema is generated, so regenerate it rather than
  hand-editing: `npm run generate-schemas`.
- **R3** — Build must pass: `npm run build` (clean → generate-schemas → lint → tsc).

## Implementation notes

- Source of truth is the enum in `SubscriptionEvents.ts`. The schema file is produced
  by `node ./src/utils/generate-schema-from-contracts.js` (per `generate-schemas` script).
  Edit the enum, then run `npm run generate-schemas` to propagate to the schema.
- This is a **breaking change** to the published contract enum → warrants a **major**
  version bump (consistent with the v4.0.0 precedent for removing `thread_id`).

## Verification

- `grep -rniE "access_token\.expired|refresh_token\.expired|TOKEN_EXPIRED" src` returns nothing.
- `npm run build` succeeds.
