import type { Tab } from './Tabs.tsx'
import { Tabs } from './Tabs.tsx'

/**
 * Пропсы верхней панели шапки.
 */
export interface TopBarProps {
  tabs: Tab[]
  currentTime: string
}

/**
 * Верхняя панель шапки с вкладками и временем.
 *
 * @param tabs Массив вкладок для отображения.
 * @param currentTime Текущее время/дата в виде строки.
 * @returns Контейнер с вкладками и меткой времени.
 */
export function TopBar({ tabs, currentTime }: TopBarProps) {
  return (
    <div className="top-bar">
      <Tabs tabs={tabs} />
      <span className="top-bar__time">{currentTime}</span>
    </div>
  )
}

