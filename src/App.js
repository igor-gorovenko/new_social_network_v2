import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MyPosts from './components/MyPosts/MyPosts'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<MyPosts />
		</div>
	)
}

export default App
