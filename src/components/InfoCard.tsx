/** Универсальная карточка с заголовком и произвольным содержимым. */
export interface InfoCardProps {
  title: string
  children?: React.ReactNode
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <section className="info-card">
      <h3 className="info-card__title">{title}</h3>
      <div className="info-card__body">{children}</div>
    </section>
  )
}

