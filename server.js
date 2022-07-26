import express from 'express'
import http from 'http'

const api = express()

const PORT = 5050

const server = http.createServer(api)

server.listen(PORT)