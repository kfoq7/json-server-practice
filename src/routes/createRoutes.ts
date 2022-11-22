import express, { Router } from 'express'
import { createApi } from '../createApi'

export function createRoutes<TypeData>(fileData: TypeData): Router {
  if (Array.isArray(fileData)) {
    throw new Error(
      `The data is missing. It must be a object, gets an \`Array\`.`
    )
  }

  const router = express.Router()

  Object.keys(fileData as object).forEach(key => {
    router.use(`/${key}`, createApi(fileData[key as keyof typeof fileData]))
  })

  return router
}
