/** Поисковая строка с подсказкой и кнопкой поиска. */
export interface SearchBarProps {
  placeholder?: string
  hint?: string
}

export function SearchBar({
  placeholder = 'Найдётся всё',
  hint = 'Например, фаза луны сегодня',
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-bar__top-links">
        <a href="#" className="search-bar__top-link">
          Видео
        </a>
        <a href="#" className="search-bar__top-link">
          Картинки
        </a>
        <a href="#" className="search-bar__top-link">
          Новости
        </a>
        <a href="#" className="search-bar__top-link">
          Карты
        </a>
        <a href="#" className="search-bar__top-link">
          Маркет
        </a>
        <a href="#" className="search-bar__top-link">
          Переводчик
        </a>
        <a href="#" className="search-bar__top-link">
          Эфир
        </a>
        <a href="#" className="search-bar__top-link">
          ещё
        </a>
      </div>
      <div className="search-bar__row">
        <input className="search-bar__input" type="text" placeholder={placeholder} />
        <button className="search-bar__button" type="button">
          Найти
        </button>
      </div>
      <div className="search-bar__hint">
        <span className="search-bar__hint-label">Найдётся всё.</span> {hint}
      </div>
    </div>
  )
}

