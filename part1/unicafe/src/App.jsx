import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  if (!props.good && !props.neutral && !props.bad) {
    return (
      <p>no feedback  given</p>
    )
  }

  const [good, neutral, bad] = [props.good, props.neutral, props.bad]
  const all = good + bad + neutral
  const average = (good - bad / 3) / 10
  const positive = good/all * 100 || 0

  return (
    <table>
      <tbody>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text} {props.value}</td></tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
