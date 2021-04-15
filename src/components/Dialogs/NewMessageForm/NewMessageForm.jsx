const NewMessageForm = (props) => {
	return (
		<div>
			<div>
				<textarea ref={props.newMessageElement}>new message</textarea>
			</div>
			<div>
				<button onClick={props.addNewMessage}>send</button>
			</div>
		</div>
	)
}

export default NewMessageForm
