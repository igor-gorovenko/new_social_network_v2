let state = {
	postPage: {
		posts: [
			{ id: 1, message: 'Text Post 1', countLike: 'likes 32' },
			{ id: 2, message: 'Text Post 2', countLike: 'likes 543' },
			{ id: 3, message: 'Text Post 3', countLike: 'likes 654' },
			{ id: 4, message: 'Text Post 4', countLike: 'likes 876' },
		],
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Vika' },
			{ id: 2, name: 'Petya' },
			{ id: 3, name: 'Nick' },
			{ id: 4, name: 'Maria' },
			{ id: 5, name: 'Miha' },
		],

		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 1, message: 'How are you?' },
			{ id: 1, message: 'I am fine' },
		],
	},
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		countLike: 0,
	}
	state.postPage.posts.push(newPost)
}

export default state
