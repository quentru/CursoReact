import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => (
  <>
  <p>{props.course}</p>
  </>
)
const Content = (props)=>(
<>
<p>{props. part} the number of exercises is: {props.exercises}</p>
</>
)
const Total = (props)=>(
<>
<p>the total is:{props.exercises1 + props.exercises2 + props.exercises3}</p>
</>
)
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <h1><Header course = {course}/></h1>
      <p>
        <Content part={part1} exercises={exercises1}/>
      </p>
      <p>
        <Content part={part2} exercises={exercises2}/>
      </p>
      <p>
        <Content part={part3} exercises={exercises3}/>
      </p>
      <p>
        <Total exercises1={exercises1} exercises2 = {exercises2} exercises3={exercises3}/>
      </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
