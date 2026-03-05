import { Logo } from './Logo'
import { NewsList } from './NewsList'
import { RatesBar } from './RatesBar'
import { SearchBar } from './SearchBar'
import { TopBar } from './TopBar'
import type { NewsItemProps } from './NewsItem'
import type { RateItemProps } from './RateItem'
import type { Tab } from './Tabs'

/**
 * Компонент шапки страницы с логотипом, вкладками, новостями, курсами валют и поиском.
 *
 * @returns Разметка шапки приложения.
 */
export function Header() {
  const tabs: Tab[] = [
    { id: 'media', label: 'Сейчас в СМИ', isActive: true },
    { id: 'germany', label: 'в Германии' },
    { id: 'recommended', label: 'Рекомендуем' },
  ]

  const newsItems: NewsItemProps[] = [
    {
      icon: '🔵',
      text: 'Путин упростил получение автомобильных номеров',
      href: '#news-1',
    },
    {
      icon: '🔵',
      text: 'В команде Зеленского раскрыли план реформ',
      href: '#news-2',
    },
    {
      icon: '🔵',
      text: '«Турпомощь» прокомментировала ситуацию в Анталье',
      href: '#news-3',
    },
  ]

  const rates: RateItemProps[] = [
    { symbol: 'USD MOEX', value: '63,52', change: '+0,09' },
    { symbol: 'EUR MOEX', value: '70,86', change: '+0,14' },
    { symbol: 'НЕФТЬ', value: '64,90', change: '+1,63%' },
  ]

  return (
    <header className="header">
      <TopBar tabs={tabs} currentTime="31 июля, среда 02:32" />

      <div className="header__news-row">
        <Logo />
        <div className="header__news-content">
          <NewsList items={newsItems} />
          <RatesBar rates={rates} />
        </div>
      </div>

      <SearchBar />
    </header>
  )
}


