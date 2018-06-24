import React, { Component } from 'react'
import { hot } from 'react-hot-loader'


import logo from './logo.png'
import styles from './App.css'
import Main from './componet/index'
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Main/>
      </div>
    )
  }
}
export default hot(module)(App)
// export default App
