import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MyPosts from './components/MyPosts/MyPosts'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Navbar />
				<div className='content'>
					<Route path='/mypost' component={MyPosts} />
					<Route path='/news' component={News} />
					<Route path='/dialogs' component={Dialogs} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
