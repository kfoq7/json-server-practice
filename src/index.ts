import express from 'express'
import { createRoutes } from './routes'

type Server = {
  start: (port?: number | string | undefined) => void
}

export interface ServerOptions<DataType> {
  data?: DataType | undefined
}

export function createServer<DataType>(
  options: ServerOptions<DataType>
): Server {
  const { data } = options

  const app = express()

  app.use(express.json())

  app.use('/api', createRoutes<typeof data>(data))

  return {
    start(port?: number | string | undefined) {
      const listenPort = port ?? 8000
      app.listen(listenPort)
      console.log('Listen on port 8000')
    }
  }
}
