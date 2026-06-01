'use client'
// components/layout/AccessibilityButton.tsx — Safe Harbor
// Custom floating button that opens the UserWay accessibility panel.
// Positioned at bottom-left. UserWay's own button is hidden via CSS.

export function AccessibilityButton() {
  function openPanel() {
    // UserWay exposes a global API to open its panel
    const uw = (window as any).UserWay
    if (uw?.UserInterface?.open) {
      uw.UserInterface.open()
    } else if (uw?.open) {
      uw.open()
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
        'bg-white border-2 border-primary text-primary',
        'flex items-center justify-center',
        'shadow-md',
        'hover:bg-primary hover:text-white transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      ].join(' ')}
    >
      {/* Universal accessibility symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="3.5" r="1.75" />
        <path d="M17 8.5h-3.5l-.8-2H9a1 1 0 0 0 0 2h2.9l.6 1.5V14l-2.3 4a1 1 0 1 0 1.75 1L13.5 16h1l1.55 3a1 1 0 1 0 1.75-1L15.5 14v-3.8L16.7 9H17a1 1 0 0 0 0-2z" />
      </svg>
    </button>
  )
}
