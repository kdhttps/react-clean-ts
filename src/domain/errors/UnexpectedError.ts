export class UnexpectedError extends Error {
  constructor(msg = 'Something went wrong! Try again soon.') {
    super(msg)
    this.name = 'UnexpectedError'
  }
}
