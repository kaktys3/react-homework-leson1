import { useState } from 'react'
import './App.css'

function App() {
  let myName = 'Andrii'
  let site = { name: "Google", url: "https://www.google.com/" }
  let number1 = 1
  let number2 = 4
  let colors = ["Червоний", "Синій", "Зелений"]

  return (
    <>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fam.ozon.com%2Fproduct%2Ftermonakleyka-na-lyuboy-vid-tekstilya-dtf-smayl-smaylik-emotsiya-emodzi-1130284730%2F&psig=AOvVaw3DADgs4j7CBBYfF95O_TYI&ust=1763564299840000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjgq477-5ADFQAAAAAdAAAAABAE"} alt={"чисто картинка"} />
      <a href={site.url}>{site.url}</a>
      <p>{number1 + number2}</p>

      {
        colors.map((color, index) => (
          <p key={index}>{color}</p>
        ))}
    </>
  )
}

export default App
