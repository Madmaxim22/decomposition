import './App.css'
import { Header } from './components/Header.tsx'
import { MainContent } from './components/MainContent.tsx'

/**
 * Корневой компонент страницы с шапкой и основным содержимым.
 *
 * @returns Разметка приложения с шапкой и основным контентом.
 */
export function App() {
  return (
    <div className="page">
      <Header />
      <MainContent />
    </div>
  )
}

export default App
