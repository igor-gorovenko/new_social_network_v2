import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import state from './redux/state.js'
import { addPost } from './redux/state.js'
import { BrowserRouter } from 'react-router-dom'

// addPost('new post test')

ReactDOM.render(
	<BrowserRouter>
		<App state={state} addPost={addPost} />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
