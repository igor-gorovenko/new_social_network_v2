import style from './Post.module.css'

const Post = (props) => {
	return (
		<div className={style.item}>
			{props.message}
			<div>{props.countLike}</div>
		</div>
	)
}

export default Post
