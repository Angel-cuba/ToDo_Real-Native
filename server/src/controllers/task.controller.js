import { connection } from '../database/db'

export const getTasks = async(req, res) => {

    const [allTasks] = await connection.query('SELECT * FROM tasks')
     console.log(allTasks)
     res.json(allTasks)
       
}

export const getTaskById = async (req, res) => {

     const [Task] = await connection.query('SELECT * FROM tasks WHERE id = ?', [req.params.id])
     console.log(Task)
     res.json(Task)
}

export const getTaskCount = async (req, res) => {

     const [Count] = await connection.query("SELECT COUNT(*) FROM tasks")
      res.json(Count[0]["COUNT(*)"])
     console.log(Count[0]["COUNT(*)"]);
}

export const createTask = async (req, res) => {
     const [createTask] = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', 
     [
          req.body.title, 
          req.body.description
          ]
          )

     console.log(createTask)
     res.json({
          id: createTask.insertId,
          ... req.body
     })
}

export const deleteTask = async (req, res) => {
     const [deleteTask] = await connection.query('DELETE FROM tasks WHERE id = ?',
      [req.params.id])
      res.sendStatus(204)
}



export const updateTask = async (req, res) => {
     const [update] = await connection.query('UPDATE tasks SET ? WHERE id = ?', 
     [req.body,
     req.params.id])
     res.send(update)
}