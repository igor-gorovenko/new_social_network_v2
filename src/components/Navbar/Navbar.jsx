import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.profile}>
				<div className={style.avatar}></div>
				<span className={style.fullName}>Full Name</span>
			</div>

			<div className={`${style.item} ${style.active}`}>
				<a href='#profile'>Profile</a>
			</div>
			<div className={style.item}>
				<a href='#news'>News</a>
			</div>
			<div className={style.item}>
				<a href='#dialogs'>Dialogs</a>
			</div>

			<div className={style.logo}>LOGO</div>
		</nav>
	)
}

export default Navbar
