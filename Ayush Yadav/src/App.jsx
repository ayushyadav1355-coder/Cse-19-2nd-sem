import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <Card
           img="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/06/static-assets-upload13185194768052720097-Cropped.jpg?q=50&fit=crop&w=825&dpr=1.5"
           name="aviral"
           class="12th" />
          <br />
          <card
           img="https://m.media-amazon.com/images/M/MV5BMDIyYjkzM2QtMDc5MS00OTExLTg2ZmUtZGM2MzJjNjNjODliXkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
           name="ayush"
           name="10th" />
          <br />
        
        </div>
  )
}
export default App