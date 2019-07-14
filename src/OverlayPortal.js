import React, { Component } from 'react'
import { createPortal } from 'react-dom'

let modalRoot = document.getElementById('react-datepicker-portal')

if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'react-datepicker-portal')
  document.body.appendChild(modalRoot)
}

class OverlayPortal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

export default OverlayPortal
