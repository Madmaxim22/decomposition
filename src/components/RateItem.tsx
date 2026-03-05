/** Отображает один курс валюты с изменением. */
export interface RateItemProps {
  symbol: string
  value: string
  change: string
}

export function RateItem({ symbol, value, change }: RateItemProps) {
  return (
    <span className="rate-item">
      <span className="rate-item__symbol">{symbol}</span>
      <span className="rate-item__value">{value}</span>
      <span className="rate-item__change">{change}</span>
    </span>
  )
}

