
import { Schema } from "joi";



const validationUtils = (mock: any, schema: Schema) => {

    const options = {
      abortEarly: false, // include all errors
      allowUnknown: false, // ignore unknown props
      stripUnknown: false, // remove unknown props
    }
    const { error, value } = schema.validate(mock.body, options)
    if (error) {
      const message = `Validation error: ${error.details
        .map((x) => x.message)
        .join(', ')}`
    throw new Error(message)
    
    } else {
     
      return true
    }
  }
export default validationUtils

export const validateHeadersAndBodyUtil = ( mock:any, bodySchema: Schema, headersSchema:Schema) => {

  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: false, // remove unknown props
  }
  const { error, value } = headersSchema.validate(mock.headers, options)
  if (error) {
    const message = `Validation error: ${error.details
      .map((x) => x.message)
      .join(', ')}`
  
  throw new Error(message)
  
  } else {
    const response = validationUtils(mock,bodySchema)
    return response
    
  }
}