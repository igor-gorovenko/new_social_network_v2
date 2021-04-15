import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import NewMessageForm from './NewMessageForm/NewMessageForm'

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	))

	const messagesElements = props.state.messages.map((m) => (
		<Message message={m.message} />
	))

	let newMessageElement = React.createRef()

	let addNewMessage = () => {
		let text = newMessageElement.current.value
		alert(text)
	}

	return (
		<div>
			<h1>Dialogs</h1>
			<div className={style.dialogs}>
				<div>{dialogsElements}</div>
				<div>
					{messagesElements}
					<NewMessageForm
						newMessageElement={newMessageElement}
						addNewMessage={addNewMessage}
					/>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
