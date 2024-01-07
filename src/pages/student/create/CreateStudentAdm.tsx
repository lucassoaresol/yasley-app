import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import {
  LayoutContentFull,
  SelectClass,
  SelectSchool,
  studentCreateSchema,
  useAuthContext,
  useStudentContext,
} from '../../../shared'

export const CreateStudentAdmPage = () => {
  const { createStudent } = useStudentContext()
  const { yearData } = useAuthContext()

  return (
    <>
      <FormContainer
        onSuccess={(data) => {
          if (yearData) createStudent(data, yearData.id)
        }}
        resolver={zodResolver(studentCreateSchema)}
      >
        <LayoutContentFull>
          <SelectSchool />
          <TextFieldElement name="name" label="Nome" required fullWidth />
          <TextFieldElement
            name="registry"
            label="Matricula"
            required
            fullWidth
          />
          <SelectClass />
          <Button variant="contained" type="submit" fullWidth>
            Salvar
          </Button>
        </LayoutContentFull>
      </FormContainer>
    </>
  )
}
