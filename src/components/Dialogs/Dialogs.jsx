import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Vika' },
		{ id: 2, name: 'Petya' },
		{ id: 3, name: 'Nick' },
		{ id: 4, name: 'Maria' },
		{ id: 5, name: 'Miha' },
	]

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 1, message: 'How are you?' },
		{ id: 1, message: 'I am fine' },
	]

	const dialogsElements = dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	))

	const messagesElements = messages.map((m) => <Message message={m.message} />)

	return (
		<div>
			<h1>Dialogs</h1>
			<div className={style.dialogs}>
				<div>{dialogsElements}</div>
				<div>{messagesElements}</div>
			</div>
		</div>
	)
}

export default Dialogs
