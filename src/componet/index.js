import React, { Component } from 'react'
import {fabric} from 'fabric'
import { Layout, Menu, Breadcrumb, Icon, Badge } from 'antd'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// import PropTypes from 'prop-types'

export default class Main extends Component {
  // static propTypes = {

  // }

  constructor(props) {
    super(props)
    this.canvas = null
    this.canvasELement = null
  }
  addText = ()=>{
    const text = new fabric.IText('text', {
      left:10,
      top:10,
      fill:'#000'
    })
    this.canvas.add(text)
  }
  componentDidMount() {
    this.canvas = new fabric.Canvas(this.canvasELement, {
      height: 600,
      width: 600
    })
    console.error(this.canvas);
  }
  render() {
    return (
      <div>
        <button onClick={this.addText}>addText</button>
        <canvas ref={ref => (this.canvasELement = ref)} />
      </div>
    )
  }
}
