import mysql from 'mysql2/promise'
import { keyDB } from '../keys/key'


export const connection = mysql.createPool(keyDB, {
          waitForConnections: true,
          connectionLimit: 20,
          queueLimit: 0
          })
