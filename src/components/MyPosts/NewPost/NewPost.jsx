import style from './NewPost.module.css'
import { Button } from 'antd'
import 'antd/dist/antd.css'

const NewPostForm = () => {
	return (
		<div>
			<h4>New post</h4>
			<textarea></textarea>
			<div>
				<Button className={style.button} type='primary'>
					Add
				</Button>
				<Button className={style.button} type='default'>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default NewPostForm
