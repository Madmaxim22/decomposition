import { RateItem, type RateItemProps } from './RateItem.tsx'

/** Панель с курсами валют, получаемыми через props. */
export interface RatesBarProps {
  rates: RateItemProps[]
}

export function RatesBar({ rates }: RatesBarProps) {
  return (
    <div className="rates-bar">
      {rates.map((rate) => (
        <RateItem key={rate.symbol} {...rate} />
      ))}
    </div>
  )
}

