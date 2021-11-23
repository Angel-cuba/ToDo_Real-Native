const API = 'https://todo-task-list-native.herokuapp.com/task';
//const API = 'http://192.168.0.13:3000/task';
export const getTasks = async () => {
	console.log('getting tasks...');
	const load = await fetch(API);

	return await load.json();
};

export const getTask = async (id) => {
	const load = await fetch(`${API}/${id}`);
	return await load.json();
};

export const saveTask = async (newTask) => {
	console.log('clicking new task');
	const res = await fetch(API, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTask),
	});
	return await res.json();
};

export const updateTask = async (id, task) => {
	const res = await fetch(`${API}/${id}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(task),
	});

	return res;
};

export const deleteTask = async (id) => {
	await fetch(`${API}/${id}`, { method: 'DELETE' });
};
