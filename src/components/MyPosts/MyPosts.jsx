import React from 'react'
import Post from './Post/Post'

const MyPost = (props) => {
	const postsElements = props.state.posts.map((p) => (
		<Post message={p.message} countLike={p.countLike} />
	))

	let newPostElement = React.createRef()

	let addPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
		newPostElement.current.value = ''
	}

	return (
		<div>
			<h1>My post</h1>
			<div>
				<h4>New post</h4>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPost}>Add</button>
				</div>
			</div>
			{postsElements}
		</div>
	)
}

export default MyPost
