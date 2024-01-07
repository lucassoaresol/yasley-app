import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import {
  LayoutContentFull,
  LayoutFull,
  classCreateSchema,
  useClassContext,
} from '../../shared'

export const CreateClassPage = () => {
  const { createClass } = useClassContext()

  return (
    <LayoutFull>
      <FormContainer
        onSuccess={(data) => createClass(data)}
        resolver={zodResolver(classCreateSchema)}
      >
        <LayoutContentFull>
          <TextFieldElement name="name" label="Nome" required fullWidth />
          <Button variant="contained" type="submit" fullWidth>
            Salvar
          </Button>
        </LayoutContentFull>
      </FormContainer>
    </LayoutFull>
  )
}
