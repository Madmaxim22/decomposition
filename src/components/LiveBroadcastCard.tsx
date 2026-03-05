import { InfoCard } from './InfoCard.tsx'

/**
 * Элемент списка трансляций блока «Эфир».
 */
export interface LiveBroadcastItem {
  title: string
  source: string
}

/**
 * Пропсы карточки блока «Эфир».
 */
export interface LiveBroadcastCardProps {
  items: LiveBroadcastItem[]
}

/**
 * Карточка блока «Эфир» с текущими трансляциями.
 *
 * @param items Массив трансляций для отображения.
 * @returns Информационная карточка с ненумерованным списком эфиров.
 */
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

