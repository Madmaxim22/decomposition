/** Контейнер вкладок верхнего меню шапки. */
export interface Tab {
  id: string
  label: string
  href?: string
  isActive?: boolean
}

export interface TabsProps {
  tabs: Tab[]
}

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

