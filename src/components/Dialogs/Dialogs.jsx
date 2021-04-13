import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
	const dialogsElements = props.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	))

	const messagesElements = props.messages.map((m) => (
		<Message message={m.message} />
	))

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
