import { InfoCard } from './InfoCard.tsx'

/** Карточка блока «Эфир» с текущими трансляциями. */
export interface LiveBroadcastItem {
  title: string
  source: string
}

export interface LiveBroadcastCardProps {
  items: LiveBroadcastItem[]
}

export function LiveBroadcastCard({ items }: LiveBroadcastCardProps) {
  return (
    <InfoCard title="Эфир">
      <ul className="live-card">
        {items.map((item) => (
          <li key={item.title} className="live-card__item">
            <span className="live-card__dot" />
            <span className="live-card__title">{item.title}</span>
            <span className="live-card__source">{item.source}</span>
          </li>
        ))}
      </ul>
    </InfoCard>
  )
}

