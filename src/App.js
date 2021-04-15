import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MyPosts from './components/MyPosts/MyPosts'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Navbar />
				<div className='content'>
					<Route path='/profileinfo' render={() => <ProfileInfo />} />
					<Route
						path='/mypost'
						render={() => (
							<MyPosts state={props.state.postPage} addPost={props.addPost} />
						)}
					/>
					<Route path='/news' render={() => <News />} />
					<Route
						path='/dialogs'
						render={() => <Dialogs state={props.state.dialogsPage} />}
					/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
