import React from 'react'
import Post from './Post/Post'
import NewPostForm from './NewPost/NewPost'

const MyPost = () => {
	return (
		<div>
			<h1>My post</h1>
			<NewPostForm />
			<Post messagePost='Text Post 1' countLike='likes 32' />
			<Post messagePost='Text Post 2' countLike='likes 21' />
			<Post messagePost='Text Post 3' countLike='likes 16' />
			<Post messagePost='Text Post 4' countLike='likes 54' />
		</div>
	)
}

export default MyPost
