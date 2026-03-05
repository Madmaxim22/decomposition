/**
 * Пропсы универсальной информационной карточки.
 */
export interface InfoCardProps {
  title: string
  children?: React.ReactNode
}

/**
 * Универсальная карточка с заголовком и произвольным содержимым.
 *
 * @param title Заголовок карточки.
 * @param children Вложенное содержимое карточки.
 * @returns Секция с заголовком и телом карточки.
 */
export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <section className="info-card">
      <h3 className="info-card__title">{title}</h3>
      <div className="info-card__body">{children}</div>
    </section>
  )
}

