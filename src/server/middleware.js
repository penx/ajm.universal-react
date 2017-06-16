import express from 'express'
import path from 'path'

function middleware(app) {
  app.use('/client', express.static(path.join(__dirname, '../../build/client')))
}

export default middleware
