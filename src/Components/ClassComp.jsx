import React from 'react'

// Stateless

// It isn't required to export a default target
// you can have a default plus named, or just named
// to import non-default, wrap them with {} in the import statment and comma seperate the values

export class ClassComp extends React.Component{
  render(){
    return <p>This is a Class Component</p>
  }
}

export class ClassComp2 extends React.Component{
  render(){
    return <p>Super Classy Component</p>
  }
}
