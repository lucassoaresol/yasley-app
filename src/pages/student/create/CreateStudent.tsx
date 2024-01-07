import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import {
  LayoutContentFull,
  SelectClass,
  studentCreateSchema,
  useSchoolContext,
  useStudentContext,
} from '../../../shared'

export const CreateStudentPage = () => {
  const { schoolRetrieve } = useSchoolContext()
  const { createStudent } = useStudentContext()

  return (
    <>
      <FormContainer
        onSuccess={(data) => {
          if (schoolRetrieve) createStudent(data, schoolRetrieve.id)
        }}
        resolver={zodResolver(studentCreateSchema)}
      >
        <LayoutContentFull>
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
