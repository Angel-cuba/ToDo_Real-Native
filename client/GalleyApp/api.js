const API = 'http://10.0.2.2:3000/task'
export const getTasks = async () => {
     const load = await fetch(API)
    return await load.json()

}
//localhost:3000

export const getTask = async ( id ) => {
const load = await fetch(`${API}/${id}`)
return await load.json()
}

export const saveTask = async (newTask) => {
   const res =  await fetch(API, {
         method: 'POST',
         headers: { 
             Accept: 'application/json', 
             'Content-Type': 'application/json'
                  },
        body: JSON.stringify(newTask)
                  })
            return await res.json()
}

export const updateTask = async (id, task) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 
            Accept: 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    
    return res
}

export const deleteTask = async ( id ) => {
   await fetch(`${API}/${id}`, 
    { method: "DELETE"}
    )
}