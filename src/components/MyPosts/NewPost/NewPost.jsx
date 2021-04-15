import style from './NewPost.module.css'
import { Button } from 'antd'
import 'antd/dist/antd.css'

const NewPostForm = (props) => {
	return (
		<div>
			<h4>New post</h4>
			<textarea ref={props.newPostElement}></textarea>
			<div>
				<Button onClick={props.addPost} className={style.button} type='primary'>
					Add
				</Button>
			</div>
		</div>
	)
}

export default NewPostForm
