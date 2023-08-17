export const errorCatch = (error: any): string =>
  error.response && error.response.data
    ? typeof error.response.data.detail === 'object'
      ? error.response.data.detail.detail
      : error.response.data.detail
    : 'An unexpected error occurred'

export const getContentType = () => ({
  'Content-Type': 'application/json',
})
