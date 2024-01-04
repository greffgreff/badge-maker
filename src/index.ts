import { handler } from './lambda'

export const lambdaHandler = async (event: any, context: any) => {
  return handler(event, context)
}
