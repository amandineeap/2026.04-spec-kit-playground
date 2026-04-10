# Data Model: Dog Walker Website

All data is static mock content stored in local TypeScript files.
No database or external API is involved.

---

## Entity: Service

Represents a dog walking or daycare service offering displayed on the Services page.

**Source file**: `data/services.ts`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `string` | Yes | Unique slug (e.g., `"solo-walk"`) |
| `name` | `string` | Yes | Display name (e.g., `"Solo Walk"`) |
| `description` | `string` | Yes | 1–2 sentence description of the service |
| `price` | `string` | Yes | Human-readable price (e.g., `"$25 per walk"`) |
| `icon` | `string` | No | Emoji for decorative display (e.g., `"🐕"`) |

**TypeScript interface**:

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon?: string;
}
```

**Mock entries** (3 required by FR-004, FR-005):

| id | name | icon |
|----|------|------|
| `solo-walk` | Solo Walk | 🐕 |
| `group-walk` | Group Walk | 🐕‍🦺 |
| `daycare` | Daycare | 🏠 |

---

## Entity: Dog

Represents a current client dog displayed on the Pack page.

**Source file**: `data/dogs.ts`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `string` | Yes | Unique slug (e.g., `"dog-01"`) |
| `name` | `string` | Yes | Dog's name |
| `breed` | `string` | Yes | Breed name |
| `description` | `string` | No | Fun fact or personality note |
| `emoji` | `string` | Yes | Emoji placeholder standing in for a dog photo |

**TypeScript interface**:

```typescript
interface Dog {
  id: string;
  name: string;
  breed: string;
  description?: string;
  emoji: string;
}
```

**Mock entries**: Exactly 12 entries required (FR-008, FR-009).
Sample names: Biscuit, Mochi, Pepper, Daisy, Bruno, Luna, Archie, Coco, Max, Bella, Finn, Rosie.

---

## Entity: Credential

Represents an insurance policy or professional certification displayed on the About page.

**Source**: Defined as a typed constant array directly in `app/about/page.tsx` (too few entries to warrant a separate data file — Principle IV).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `type` | `'insurance' \| 'certification'` | Yes | Distinguishes insurance from certifications |
| `title` | `string` | Yes | Name of the policy or certification |
| `description` | `string` | Yes | What it covers or why it matters |
| `issuer` | `string` | No | Issuing organization (e.g., `"Pet Professional Guild"`) |

**TypeScript interface**:

```typescript
interface Credential {
  type: 'insurance' | 'certification';
  title: string;
  description: string;
  issuer?: string;
}
```

**Mock entries** (2–3 entries covering FR-006, FR-007):

| type | title |
|------|-------|
| `insurance` | Pet Business Insurance |
| `certification` | Pet First Aid & CPR Certified |
| `certification` | Professional Dog Walker Certification |

---

## Relationships

All three entities are independent — there are no foreign keys or joins.
Data is loaded via direct TypeScript imports at the page level.

## Validation Rules

Derived from functional requirements:

- `dogs` array MUST contain exactly 12 entries (FR-008)
- Every `Dog` MUST have `name` and `breed` populated (FR-009)
- `services` array MUST contain exactly 3 entries: `solo-walk`, `group-walk`, `daycare` (FR-004)
- Every `Service` MUST have `name`, `description`, and `price` populated (FR-005)
- At least one `Credential` with `type: 'insurance'` MUST exist (FR-006)
- At least one `Credential` with `type: 'certification'` MUST exist (FR-007)
