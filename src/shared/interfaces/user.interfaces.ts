import { z } from 'zod'
import {
  createAdmSchema,
  createDirectorSchema,
  createSecretSchema,
  iDialogDataProps,
  iWorkSchool,
  userFirstSchema,
  userPasswordSchema,
  userUpdateSchema,
} from '../../shared'

export interface iUserProfile {
  id: string
  name: string
  is_first_access: boolean
  profile?: {
    url: string
  }
  requests: number
}

export interface iUser extends iUserProfile {
  login: string
  cpf: string
  email: string
  is_active: boolean
  created_at: Date
  frequencies: number
  work_school?: iWorkSchool
}

export interface iDialogUserProps extends iDialogDataProps {
  user: iUser
}

export interface iUserDash {
  countSchool: number
  countClass: number
  countStudent: number
  countFrequency: number
  countServer: number
  countNotClass: number
}

export interface iDiretor {
  id: string
  name: string
  cpf: string
}

export type iServer = iDiretor

export type iUserAdmRequest = z.infer<typeof createAdmSchema>

export type iUserDirectorRequest = z.infer<typeof createDirectorSchema>

export type iUserSecretRequest = z.infer<typeof createSecretSchema>

export type iUserFirstRequest = z.infer<typeof userFirstSchema>

export type iUserUpdateRequest = z.infer<typeof userUpdateSchema>

export type iUserPasswordRequest = z.infer<typeof userPasswordSchema>
