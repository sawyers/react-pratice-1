import './App.css'
import FunctionalComp from "./Components/FunctionalComp"
// Or rename like python import as, but this only applies to the default target
import FC from "./Components/FunctionalComp"
import {ClassComp, ClassComp2} from "./Components/ClassComp"
import Click from './Components/Click'

export default function App() {
  return (
    // multiple html tags must be included in a div tag
    // multiple div tags are not allowed
    <div>
      <h1>
        React ⚛️ + Vite ⚡ + Replit 🌀
      </h1>
      <h2>Components</h2>
      <FunctionalComp />
      <FC></FC>
      <ClassComp />
      <ClassComp2 />
      <Click />
    </div>
    // <div>
    //   <p>more shit that can't work because only allowed one dif in the return</p>
    // </div>
  )
}
