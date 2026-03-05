import { InfoCard } from './InfoCard.tsx'

/**
 * Карточка с картой и ссылкой на расписание по стране.
 *
 * @returns Информационная карточка с блоком карты.
 */
export function MapCard() {
  return (
    <InfoCard title="Карта Германии">
      <div className="map-card">
        <div className="map-card__row">
          <span>Расписание</span>
        </div>
      </div>
    </InfoCard>
  )
}

