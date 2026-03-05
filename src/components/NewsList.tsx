import { NewsItem, type NewsItemProps } from './NewsItem.tsx'

/** Список новостей в шапке с данными, переданными через props. */
export interface NewsListProps {
  items: NewsItemProps[]
}

export function NewsList({ items }: NewsListProps) {
  return (
    <ul className="news-list">
      {items.map((item) => (
        <NewsItem key={item.href} {...item} />
      ))}
    </ul>
  )
}

