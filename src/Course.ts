export interface Course {
  id: number
  info: CourseInfo
}

export interface CourseInfo {
  abbriviature: string
  description: string
  title: string
  department: string
  school: string
  credits: string
  legacy: any
}
