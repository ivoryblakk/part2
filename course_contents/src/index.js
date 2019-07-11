import React from 'react'
import ReactDOM from 'react-dom'
const shortid = require('shortid');

const Course=(props)=>{
    const {course} = props;
    console.log("course",course)
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts}  />
    </>
    )
}
const Header = (props) => {
    return  <h1>{props.name}</h1>;
  }

const Content = (props) => {
  const {parts} = props;
  console.log("parts",parts)
  const rows = () => parts.map(p => <Part key={shortid.generate()} part={p.name} exercise={p.exercises}/>  )
  
  return (
     <> 
    <div>
      {rows()}
    </div>
    </>
  )
}

const Total = (props) => {
  const {parts} = props;
  let allExercises =[];
  parts.forEach( x => {
      allExercises.push(x.exercises);
  });
  console.log("allExercises",allExercises)
  const sum = () => allExercises.reduce((a,p) => a+p) 

  return  <p> <strong>Total of {sum()} exercises</strong> </p>;
}

const Part = (props) => {
    return <p>{props.part} {props.exercise}  </p>
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 1
      },
      {
        name: ' Test of map function',
        exercises: 5
      }
    ]
  }

  return (
    <div>
        <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))