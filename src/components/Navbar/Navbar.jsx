import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.fullName}>
				<NavLink to='/profileinfo'>Igor Gorovenko</NavLink>
			</div>
			<hr className={style.line} />

			<div className={style.item}>
				<NavLink to='/mypost'>My post</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to='/dialogs'>Dialogs</NavLink>
			</div>

			<div className={style.logo}>LOGO</div>
		</nav>
	)
}

export default Navbar
