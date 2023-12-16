export type ApplicationStateType = {
  event: Window | MouseEvent | null | Event
  gitResponse: any | null
  error: any | null
}

export const ApplicationState: ApplicationStateType = {
  event: null,
  gitResponse: null,
  error: null,
}
