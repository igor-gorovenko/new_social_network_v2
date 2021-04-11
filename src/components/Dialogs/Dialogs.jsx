import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'
import { Button } from 'antd'
import 'antd/dist/antd.css'

const Dialog = (props) => {
	let path = '/dialogs/' + props.id
	return (
		<div>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return <div>{props.message}</div>
}

const Dialogs = (props) => {
	let dialogsData = [
		{ id: 1, name: 'Vika' },
		{ id: 2, name: 'Petya' },
		{ id: 3, name: 'Nick' },
		{ id: 4, name: 'Maria' },
		{ id: 5, name: 'Miha' },
	]

	let messageData = [
		{ id: 1, message: 'Hi' },
		{ id: 1, message: 'How are you?' },
		{ id: 1, message: 'I am fine' },
	]
	return (
		<div>
			<h1>Dialogs</h1>
			<div className={style.dialogs}>
				<div>
					<Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
					<Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
					<Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
					<Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
					<Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
				</div>
				<div>
					<Message message={messageData[0].message} />
					<Message message={messageData[1].message} />
					<Message message={messageData[2].message} />
					<div>
						<textarea>New Message</textarea>
					</div>

					<div>
						<Button className={style.button} type='primary'>
							Send
						</Button>
						<Button className={style.button} type='default'>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
