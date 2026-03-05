import { RateItem, type RateItemProps } from './RateItem.tsx'

/**
 * Пропсы панели с курсами валют.
 */
export interface RatesBarProps {
  rates: RateItemProps[]
}

/**
 * Панель с курсами валют.
 *
 * @param rates Массив объектов с информацией о курсе.
 * @returns Набор элементов с курсами валют.
 */
export function RatesBar({ rates }: RatesBarProps) {
  return (
    <div className="rates-bar">
      {rates.map((rate) => (
        <RateItem key={rate.symbol} {...rate} />
      ))}
    </div>
  )
}

