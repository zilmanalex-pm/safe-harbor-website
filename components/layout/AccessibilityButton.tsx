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
        'bg-primary text-white',
        'flex items-center justify-center',
        'shadow-lg',
        'hover:scale-110 transition-transform duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      ].join(' ')}
    >
      {/* Standard accessibility icon (person in circle) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="4" r="2" />
        <path d="M19 9h-6l-1-3H8a1 1 0 0 0 0 2h3.28L12 10.06V15l-2.6 4.33a1 1 0 1 0 1.73 1L13 17h2l1.87 3.33a1 1 0 1 0 1.73-1L16 15v-4.72L17.72 9H19a1 1 0 0 0 0-2z" />
      </svg>
    </button>
  )
}
