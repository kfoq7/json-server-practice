import express, { Request, Response, Router } from 'express'

/**
 * Craete a API with methods GET, POST, PUT, PUTCH,
 * @param data The data that provides the user
 * @returns return router
 */
export const createApi = (data: any): Router => {
  const router = express.Router()

  const showData = (_req: Request, res: Response) => {
    res.json(data)
  }

  const addData = (req: Request, res: Response) => {
    const newData = req.body
    console.log(newData)

    data.push(newData)
    res.json(data)
  }

  const updateData = (req: Request, res: Response) => {
    //TODO: resolving to persist the old data
  }

  router
    .route('/')
    .get(showData)
    .post(addData)
    .put(updateData)
    .patch(updateData)

  return router
}
