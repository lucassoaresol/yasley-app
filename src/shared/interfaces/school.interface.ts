import { z } from 'zod'
import {
  defineServerSchema,
  iClass,
  iDialogDataProps,
  iDiretor,
  iServer,
  schoolClassCreateSchema,
  schoolCreateSchema,
  schoolImportSchema,
  serverCreateSchema,
  studentCreateSchema,
  studentImportSchema,
} from '../../shared'

export interface iDashSchool {
  frequencies: number
  day_infreq?: number
  school_infreq: number
  frequencyOpen: number
  classTotal: number
  stundents: number
}

export interface iSchool {
  id: string
  label: string
  name: string
  is_active: boolean
  director?: iDiretor
  server?: iServer
  classes: number
  students: number
  frequencies: number
  servers: number
  infrequency: number
  class?: iClass
  key: string
}

export interface iDialogSchoolProps extends iDialogDataProps {
  school: iSchool
}

export interface iSchoolClass {
  id: string
  name: string
  students: number
  frequencies: number
  key: string
}

export interface iSchoolUser {
  id: string
  name: string
  cpf: string
  key: string
}

export interface iWorkSchool {
  school: iSchool
}

export interface iSchoolServer {
  server: iServer
}

export interface iWithSchool {
  id: string
  name: string
}

export type iServerRequest = z.infer<typeof serverCreateSchema>

export type iSchoolRequest = z.infer<typeof schoolCreateSchema>

export type iSchoolClassRequest = z.infer<typeof schoolClassCreateSchema>

export type iSchoolServerRequest = z.infer<typeof defineServerSchema>

export type iSchoolImportRequest = z.infer<typeof schoolImportSchema>

export type iStudentRequest = z.infer<typeof studentCreateSchema>

export type iStudentImportRequest = z.infer<typeof studentImportSchema>
