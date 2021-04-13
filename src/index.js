import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let dialogs = [
	{ id: 1, name: 'Vika' },
	{ id: 2, name: 'Petya' },
	{ id: 3, name: 'Nick' },
	{ id: 4, name: 'Maria' },
	{ id: 5, name: 'Miha' },
]

let messages = [
	{ id: 1, message: 'Hi' },
	{ id: 1, message: 'How are you?' },
	{ id: 1, message: 'I am fine' },
]

let posts = [
	{ id: 1, message: 'Text Post 1', countLike: 'likes 32' },
	{ id: 2, message: 'Text Post 2', countLike: 'likes 543' },
	{ id: 3, message: 'Text Post 3', countLike: 'likes 654' },
	{ id: 4, message: 'Text Post 4', countLike: 'likes 876' },
]

ReactDOM.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts} />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
