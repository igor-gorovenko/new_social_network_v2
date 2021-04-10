import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.logo}>L O G O</div>

			<div className={style.item}>
				<a>Profile</a>
			</div>
			<div className={`${style.item} ${style.active}`}>
				<a>News</a>
			</div>
			<div className={style.item}>
				<a>Messages</a>
			</div>
		</nav>
	)
}

export default Navbar
