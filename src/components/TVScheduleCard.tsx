import { InfoCard } from './InfoCard.tsx'

/**
 * Элемент списка телепрограммы.
 */
export interface TVScheduleItem {
  time: string
  title: string
  channel: string
}

/**
 * Пропсы карточки телепрограммы.
 */
export interface TVScheduleCardProps {
  items: TVScheduleItem[]
}

/**
 * Карточка с кратким списком телепрограммы.
 *
 * @param items Массив элементов телепрограммы.
 * @returns Информационная карточка со списком телепередач.
 */
export function TVScheduleCard({ items }: TVScheduleCardProps) {
  return (
    <InfoCard title="Телепрограмма">
      <ul className="tv-card">
        {items.map((item) => (
          <li key={item.time} className="tv-card__item">
            <span className="tv-card__time">{item.time}</span>
            <span className="tv-card__title">{item.title}</span>
            <span className="tv-card__channel">{item.channel}</span>
          </li>
        ))}
      </ul>
    </InfoCard>
  )
}

