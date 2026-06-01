'use client'
// components/layout/AccessibilityButton.tsx — Safe Harbor
// Custom floating button that opens the UserWay accessibility panel.
// Positioned at bottom-left. Programmatically clicks UserWay's hidden button.

export function AccessibilityButton() {
  function openPanel() {
    // Click UserWay's own (off-screen) button to open its panel
    const uwBtn =
      document.getElementById('userwayAccessibilityIcon') ||
      (document.querySelector('[id*="userway" i]') as HTMLElement | null)
    if (uwBtn) {
      uwBtn.click()
    }
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
      {/* ISA — International Symbol of Access (wheelchair) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <circle cx="60" cy="12" r="10" />
        <path d="M82 72 L70 45 L48 45 L44 30 L28 30 L28 40 L36 40 L42 62 L62 62 L68 80 A18 18 0 1 1 34 80 A18 18 0 0 1 58 65 L54 52 A28 28 0 1 0 88 80 Z" />
      </svg>
    </button>
  )
}
