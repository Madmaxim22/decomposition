/**
 * Пропсы компонента поисковой строки.
 */
export interface SearchBarProps {
  placeholder?: string
  hint?: string
}

/**
 * Поисковая строка с подсказкой и кнопкой поиска.
 *
 * @param placeholder Текст плейсхолдера в поле ввода.
 * @param hint Текст подсказки под строкой поиска.
 * @returns Блок с верхними ссылками, полем ввода и подсказкой.
 */
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

