export const makeApiBackendUrl = (path: string) => {
  return `${import.meta.env.REACT_APP_API_URL}${path}`
}
