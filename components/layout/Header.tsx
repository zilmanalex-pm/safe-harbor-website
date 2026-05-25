// components/layout/Header.tsx — Safe Harbor
// Thin wrapper around Nav. Handles sticky positioning and any future header logic
// (e.g. scroll-aware background, announcement bar, locale switcher).
// Sprint 3: add scroll-aware background fade if needed.

import { Nav } from './Nav'
import type { NavProps } from '@/types/components'

export function Header(props: NavProps) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <Nav {...props} />
    </header>
  )
}
