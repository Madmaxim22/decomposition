import { NewsItem, type NewsItemProps } from './NewsItem.tsx'

/**
 * Пропсы списка новостей в шапке.
 */
export interface NewsListProps {
  items: NewsItemProps[]
}

/**
 * Список новостей в шапке.
 *
 * @param items Массив новостных элементов для отображения.
 * @returns Список `<ul>` с новостями.
 */
export function NewsList({ items }: NewsListProps) {
  return (
    <ul className="news-list">
      {items.map((item) => (
        <NewsItem key={item.href} {...item} />
      ))}
    </ul>
  )
}

