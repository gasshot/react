import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // 리액트 라우터 사용할 시 App을 감싸서 사용
  <BrowserRouter>
    {/* 이 안에서 라우팅이 동작함 */}
    <App />
  </BrowserRouter>
)
