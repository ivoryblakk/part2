import React from 'react'

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


export default Course