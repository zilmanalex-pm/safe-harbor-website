'use client'
// components/layout/AccessibilityButton.tsx — Safe Harbor
// Custom floating button that opens the UserWay accessibility panel.

import { Accessibility } from 'lucide-react'

export function AccessibilityButton() {
  function openPanel() {
    const uwBtn =
      document.getElementById('userwayAccessibilityIcon') ||
      (document.querySelector('[id*="userway" i]') as HTMLElement | null)
    if (uwBtn) uwBtn.click()
  }

  return (
    <button
      type="button"
      onClick={openPanel}
      aria-label="פתח תפריט נגישות / Открыть меню доступности"
      className={[
        'fixed bottom-6 left-6 z-[200]',
        'w-12 h-12 rounded-full',
        'bg-[#0057B8] text-white',
        'flex items-center justify-center',
        'shadow-lg',
        'hover:opacity-90 transition-opacity duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057B8]',
      ].join(' ')}
    >
      <Accessibility className="w-6 h-6" aria-hidden="true" />
    </button>
  )
}
