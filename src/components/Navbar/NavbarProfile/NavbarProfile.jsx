import style from './NavbarProfile.module.css'

const NavbarProfile = () => {
	return (
		<div>
			<div className={style.avatar}></div>
			<span className={style.fullName}>Full Name</span>
		</div>
	)
}

export default NavbarProfile
