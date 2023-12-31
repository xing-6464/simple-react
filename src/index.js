// import React from 'react'
import React from './react'
import ReactDOM from './react-dom'
// import ReactDOM from 'react-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<div>{ele} Hello Simple React</div>)
// const helloReact = <div style={{ color: 'red' }}>Hello React</div>
// function MyFunctionComponent(props) {
//   return <div style={{ color: 'red' }}>Hello React</div>
// }

class MyClassComponent extends React.Component {
  render() {
    return (
      <div style={{ color: 'red' }}>
        Hello React<span>{this.props.xx}</span>
      </div>
    )
  }
}
ReactDOM.render(
  <MyClassComponent xx="child1" />,
  document.getElementById('root')
)
