import type { Tab } from './Tabs.tsx'
import { Tabs } from './Tabs.tsx'

/** Верхняя панель шапки с вкладками и временем. */
export interface TopBarProps {
  tabs: Tab[]
  currentTime: string
}

export function TopBar({ tabs, currentTime }: TopBarProps) {
  return (
    <div className="top-bar">
      <Tabs tabs={tabs} />
      <span className="top-bar__time">{currentTime}</span>
    </div>
  )
}

