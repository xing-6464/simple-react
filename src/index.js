// import React from 'react'
import React from './react'
import ReactDOM from './react-dom'
// import ReactDOM from 'react-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<div>{ele} Hello Simple React</div>)
const helloReact = <div style={{ color: 'red' }}>Hello React</div>
console.log(helloReact)
ReactDOM.render(helloReact, document.getElementById('root'))
