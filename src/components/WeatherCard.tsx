import { InfoCard } from './InfoCard.tsx'

/** Карточка с краткой сводкой погоды на сегодня. */
export function WeatherCard() {
  return (
    <InfoCard title="Погода">
      <div className="weather-card">
        <div className="weather-card__icon">🌧</div>
        <div className="weather-card__temp">+17°</div>
        <div className="weather-card__details">
          <div>Утром +17°, днём +20°</div>
        </div>
      </div>
    </InfoCard>
  )
}

