import { REACT_ELEMENT } from './utils'

function render(VNode, containerDOM) {
  // 将虚拟dom转换成真实dom
  // 将得到的真实dom挂载到containerDOM中
  mount(VNode, containerDOM)
}

function mount(VNode, containerDOM) {
  const newDOM = createDOM(VNode)
  newDOM && containerDOM.appendChild(newDOM)
}

function createDOM(VNode) {
  // 1.创建元素 2.处理子元素 3.处理属性值
  const { type, props } = VNode
  let dom
  if (type && VNode.$$type === REACT_ELEMENT) {
    dom = document.createElement(type)
  }
  if (props) {
    if (typeof props.children === 'object' && props.children.type) {
      mount(props.children, dom)
    } else if (Array.isArray(props.children)) {
      mountArray(props.children, dom)
    } else if (typeof props.children === 'string') {
      dom.appendChild(document.createTextNode(props.children))
    }
  }

  // TODO: 处理属性值
  return dom
}

function mountArray(children, parent) {
  if (!Array.isArray(children)) return
  for (let i = 0; i < children.length; i++) {
    if (typeof children[i] === 'string') {
      parent.appendChild(document.createTextNode(children[i]))
    } else {
      mount(children[i], parent)
    }
  }
}

const ReactDOM = {
  render,
}

export default ReactDOM