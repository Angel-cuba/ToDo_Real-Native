import { Router } from 'express'
import { getTasks, deleteTask, updateTask, getTaskById, createTask, getTaskCount } from '../controllers/task.controller'

const router = Router()

/**
 * @swagger
 * /task:
 *   get:
 *        summary: Get all tasks
 */
router.get('/task', getTasks)

/**
 * @swagger
 * /task:
 *   get:
 *        summary: Get how many tasks 
 */
router.get('/task/count', getTaskCount)

/**
 * @swagger
 * /task:
 *   get:
 *        summary: Get one task by Id
 */
router.get('/task/:id', getTaskById)

/**
 * @swagger
 * /task:
 *   post:
 *        summary: Get all tasks
 */
router.post('/task', createTask)

/**
 * @swagger
 * /task:
 *   delete:
 *        summary: Delete one task
 */
router.delete('/task/:id', deleteTask)

/**
 * @swagger
 * /task:
 *   put:
 *        summary: Update one task
 */
router.put('/task/:id', updateTask)

export default router