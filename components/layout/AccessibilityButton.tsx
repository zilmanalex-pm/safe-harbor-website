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
        'bg-primary text-white',
        'flex items-center justify-center',
        'shadow-lg',
        'hover:opacity-90 transition-opacity duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      ].join(' ')}
    >
      {/* Standard universal accessibility symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-6 h-6"
        aria-hidden="true"
      >
        {/* Head */}
        <circle cx="12" cy="4" r="2" />
        {/* Body, arms, legs */}
        <path d="M19 10.5a1 1 0 0 0-1-1h-4.28l-.53-1.5H15a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h1.18l1.07 3H9a1 1 0 0 0-.95.68L6.1 18.2a1 1 0 1 0 1.9.64L9.7 14h4.6l1.7 4.84a1 1 0 1 0 1.9-.64L16 12H18a1 1 0 0 0 1-1.5z" />
      </svg>
    </button>
  )
}
