import React from 'react'
import Post from './Post/Post'
import NewPostForm from './NewPost/NewPost'

const MyPost = (props) => {
	const postsElements = props.state.posts.map((p) => (
		<Post message={p.message} countLike={p.countLike} />
	))

	let newPostElement = React.createRef()

	let addNewPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
	}

	return (
		<div>
			<h1>My post</h1>
			<NewPostForm addPost={addNewPost} newPostElement={newPostElement} />
			{postsElements}
		</div>
	)
}

export default MyPost
