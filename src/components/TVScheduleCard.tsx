import { InfoCard } from './InfoCard.tsx'

/** Карточка с кратким списком телепрограммы. */
export interface TVScheduleItem {
  time: string
  title: string
  channel: string
}

export interface TVScheduleCardProps {
  items: TVScheduleItem[]
}

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

