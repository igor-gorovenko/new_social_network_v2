import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import NewPostForm from './NewPost/NewPost'

const Profile = () => {
	return (
		<div className={style.content}>
			<h1>My post</h1>
			<div>
				<NewPostForm />
			</div>
			<div>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default Profile
