# 📂 File-Based Routing System

TanStack Start leverages a native **file-based routing** architecture. Every `.tsx` file inside the `app/routes/` directory map explicitly to a reachable URL.

> 🚫 **Framework Convention Guard:** Do **not** create directories or files like `src/pages/`, `src/routes/_app/index.tsx`, or `app/layout.tsx`. Those belong to Next.js or Remix conventions and will bypass the TanStack compiler. The definitive application shell is exclusively controlled by `app/routes/__root.tsx`.

---

## 🧭 Route Routing Conventions

The compiler resolves paths, dynamic segments, and layout wrappers using the following strict structural patterns:

| Routing File Pattern | Matched URL Path | Segment Parameter Access Mode |
| :--- | :--- | :--- |
| `index.tsx` | `/` | *Static Route* |
| `about.tsx` | `/about` | *Static Route* |
| `users.index.tsx` | `/users` | *Index Fallback* |
| `users.$id.tsx` | `/users/:id` | Dynamic (`useParams().id`) — *Bare `$`, no braces* |
| `files.$.tsx` | `/files/*` | Catch-all Splat (`useParams()._splat`) — *Never use `*`* |
| `_layout.tsx` | *None* (Pathless Layout) | Layout wrapper — *Renders children via* `<Outlet />` |
| `__root.tsx` | *None* (Global App Shell) | Root boundary — *Preserve* `<Outlet />` *and* `<Scripts />` |

---

## 🚫 Compiler Warning

> [!WARNING]
> **Do not modify `routeTree.gen.ts` by hand.**  # SDET_Portfolio
