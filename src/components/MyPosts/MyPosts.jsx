import React from 'react'
import Post from './Post/Post'
import NewPostForm from './NewPost/NewPost'

const MyPost = () => {
	return (
		<div>
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

export default MyPost
