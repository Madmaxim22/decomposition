import { LiveBroadcastCard, type LiveBroadcastCardProps } from './LiveBroadcastCard.tsx'
import { MapCard } from './MapCard.tsx'
import { TVScheduleCard, type TVScheduleCardProps } from './TVScheduleCard.tsx'
import { WeatherCard } from './WeatherCard.tsx'

/**
 * Сетка карточек с погодой, картой, телепрограммой и блоком «Эфир».
 *
 * @returns Контейнер с набором информационных карточек.
 */
export function InfoGrid() {
  const tvItems: TVScheduleCardProps['items'] = [
    { time: '02:15', title: 'THT.Best', channel: 'THT International' },
    { time: '02:25', title: 'Джинглики', channel: 'Карусель INT' },
    { time: '02:45', title: 'Наедине со всеми', channel: 'Первый' },
  ]

  const liveItems: LiveBroadcastCardProps['items'] = [
    { title: 'Управление как искусство', source: 'Успех' },
    { title: 'Ночь. Мир в это время', source: 'earthTV' },
    { title: 'Андрей Возн...', source: 'Совершенно секретно' },
  ]

  return (
    <div className="info-grid">
      <WeatherCard />
      <MapCard />
      <TVScheduleCard items={tvItems} />
      <LiveBroadcastCard items={liveItems} />
    </div>
  )
}

