import { GitHubUser, ProjectResponse } from '../typings/api-typings'

export type ApplicationStateType = {
  event: Window | MouseEvent | null | Event
  gitResponse: GitHubUser | null
  error: any | null
  projectResponse: ProjectResponse[] | null
}

export const ApplicationState: ApplicationStateType = {
  event: null,
  gitResponse: null,
  error: null,
  projectResponse: null,
}
