/**
 * Пропсы элемента, отображающего один курс валюты с изменением.
 */
export interface RateItemProps {
  symbol: string
  value: string
  change: string
}

/**
 * Отображает один курс валюты с изменением.
 *
 * @param symbol Обозначение инструмента (например, «USD MOEX»).
 * @param value Текущее значение курса.
 * @param change Изменение курса в сравнении с предыдущим значением.
 * @returns Инлайновый элемент с информацией о курсе.
 */
export function RateItem({ symbol, value, change }: RateItemProps) {
  return (
    <span className="rate-item">
      <span className="rate-item__symbol">{symbol}</span>
      <span className="rate-item__value">{value}</span>
      <span className="rate-item__change">{change}</span>
    </span>
  )
}

