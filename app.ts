import { createServer } from './src'

const data = {
  tasks: [
    {
      id: 1,
      name: 'Task 1'
    }
  ]
}

const { start } = createServer({
  data
})

start()
