/** Отображает одну новость с иконкой, текстом и ссылкой. */
export interface NewsItemProps {
  icon?: React.ReactNode
  text: string
  href: string
}

export function NewsItem({ icon, text, href }: NewsItemProps) {
  return (
    <li className="news-item">
      <a href={href} className="news-item__link">
        {icon && <span className="news-item__icon">{icon}</span>}
        <span className="news-item__text">{text}</span>
      </a>
    </li>
  )
}

