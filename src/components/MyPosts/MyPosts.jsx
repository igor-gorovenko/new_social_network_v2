import React from 'react'
import Post from './Post/Post'
import NewPostForm from './NewPost/NewPost'

const MyPost = (props) => {
	// let posts = [
	// 	{ id: 1, message: 'Text Post 1', countLike: 'likes 32' },
	// 	{ id: 2, message: 'Text Post 2', countLike: 'likes 543' },
	// 	{ id: 3, message: 'Text Post 3', countLike: 'likes 654' },
	// 	{ id: 4, message: 'Text Post 4', countLike: 'likes 876' },
	// ]

	const postsElements = props.state.posts.map((p) => (
		<Post message={p.message} countLike={p.countLike} />
	))

	return (
		<div>
			<h1>My post</h1>
			<NewPostForm />
			{postsElements}
		</div>
	)
}

export default MyPost
