import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherScreen from './pages/WeatherScreen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherScreen />
  </StrictMode>,
)
