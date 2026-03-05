import { InfoGrid } from './InfoGrid.tsx'
import { PromoBanner } from './PromoBanner.tsx'

/**
 * Основной контент под шапкой с баннером и информационными карточками.
 *
 * @returns Элемент `<main>` с промо-баннером и сеткой информационных карточек.
 */
export function MainContent() {
  return (
    <main className="main-content">
        <PromoBanner />
        <InfoGrid />
    </main>
  )
}

