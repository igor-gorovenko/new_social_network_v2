import style from './Dialogs.module.css'

const Dialogs = (props) => {
	return (
		<div>
			<h1>Dialogs</h1>
			<div className={style.dialogs}>
				<div>
					<div>Vika</div>
					<div>Petya</div>
					<div>Maria</div>
					<div>Vitalick</div>
					<div>Nick</div>
				</div>
				<div>
					<div>Hi</div>
					<div>How are you?</div>
					<div>I am fine</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
