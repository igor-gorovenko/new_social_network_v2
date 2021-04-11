import React from 'react'
import style from './Navbar.module.css'
import NavbarProfile from './NavbarProfile/NavbarProfile'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<NavbarProfile />

			<div className={`${style.item} ${style.active}`}>
				<a href='/mypost'>My post</a>
			</div>
			<div className={style.item}>
				<a href='/news'>News</a>
			</div>
			<div className={style.item}>
				<a href='/dialogs'>Dialogs</a>
			</div>

			<div className={style.logo}>LOGO</div>
		</nav>
	)
}

export default Navbar
