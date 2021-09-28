import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

import SwaggerJsdoc from 'swagger-jsdoc'
import SwaggerUiExpress from 'swagger-ui-express'
import { options } from './swaggerOptions'
const specs = SwaggerJsdoc(options)

import taskRoutes from './routes/task.routes'


const app = express();


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(taskRoutes)

app.use('/docs', SwaggerUiExpress.serve, SwaggerUiExpress.setup(specs))
export default app;