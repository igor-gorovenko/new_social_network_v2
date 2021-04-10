import React from 'react'
import style from './Profile.module.css'

const Profile = () => {
	return (
		<div className={style.content}>
			<div>ava + description</div>
			<h1>My posts</h1>
			<div>New post</div>
			<div>
				<div className={style.item}>Post 1</div>
				<div className={style.item}>Post 2</div>
			</div>
		</div>
	)
}

export default Profile
