/**
 * Описание отдельной вкладки верхнего меню.
 */
export interface Tab {
  id: string
  label: string
  href?: string
  isActive?: boolean
}

/**
 * Пропсы контейнера вкладок.
 */
export interface TabsProps {
  tabs: Tab[]
}

/**
 * Контейнер вкладок верхнего меню шапки.
 *
 * @param tabs Массив вкладок для отображения.
 * @returns Навигационный блок с ссылками-вкладками.
 */
export function Tabs({ tabs }: TabsProps) {
  return (
    <nav className="tabs">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href ?? '#'}
          className={tab.isActive ? 'tabs__item tabs__item--active' : 'tabs__item'}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}

