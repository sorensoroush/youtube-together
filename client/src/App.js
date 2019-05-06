import React, { Component }  from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Youtube Together</h1>
        </header>
        <main>
          <form>
            <h2>Register</h2>
            <input name="name" type="text" />
            <input name="password" type="password" />
            <button>Register</button>
          </form>
          <form>
            <h2>Log In</h2>
            <input name="name" type="text" />
            <input name="password" type="password" />
            <button>Log In</button>
          </form>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}

export default withRouter(App)
