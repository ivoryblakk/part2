import React from 'react'
import ReactDOM from 'react-dom'
//const shortid = require('shortid');

const Course=(props)=>{
    const {name ,parts } = props;
    console.log("parts",parts)
  return (
    <>
    <Header name={name} />
    <Content parts={parts} />
    <Total parts={parts}  />
    </>
    )
}
const Header = (props) => {
    return  <h2>{props.name}</h2>;
  }

const Content = (props) => {
  const {parts} = props;
  console.log("parts",parts)
  const rows = () => parts.map(p => <Part key={p.id} part={p.name} exercise={p.exercises}/>  )
  
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
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    const row = () => courses.map(c => <Course key={c.id} name={c.name} parts={c.parts}/>  )

  return (
    <div>
        <h1>Web Development Curriculum</h1>
        {row()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))