export interface DirectusError {
  _data?: {
    errors?: {
      message: string
      extensions?: {
        code?: string
        collection?: string
        field?: string
      }
    }[]
    url?: string
    statusCode?: number
    statusMessage?: string
    message?: string
    stack?: string
  }
}

export interface FormattedError {
  code: string
  message: string
  validationErrors?: {
    collection: string
    field: string
  }[]
  url?: string
  statusCode?: number
  statusMessage?: string
  stack?: string
}
