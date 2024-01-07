import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormContainer, PasswordElement } from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, IconButton } from '@mui/material'
import { Info } from '@mui/icons-material'
import {
  Glossary,
  LayoutContentFull,
  LayoutFull,
  passwordRecoverySchema,
  useAuthContext,
} from '../../shared'

export const PasswordPage = () => {
  const { userId, token } = useParams()
  const { recoveryPassword } = useAuthContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <LayoutFull padding={6}>
      <FormContainer
        onSuccess={(data) => {
          if (userId && token) recoveryPassword(data, userId, token)
        }}
        resolver={zodResolver(passwordRecoverySchema)}
      >
        <LayoutContentFull>
          <IconButton onClick={handleOpen} color="secondary">
            <Info />
          </IconButton>
          <PasswordElement
            name="password"
            label="Nova Senha"
            required
            fullWidth
          />
          <PasswordElement
            name="repeat_password"
            label="Confirmar Nova Senha"
            required
            fullWidth
          />
          <Button variant="contained" type="submit" fullWidth>
            Enviar
          </Button>
        </LayoutContentFull>
      </FormContainer>
      <Glossary
        open={open}
        onClose={handleOpen}
        message="Preencha as informações com a sua nova senha e repita-a para ter acesso
        ao sistema com a senha atualizada."
      />
    </LayoutFull>
  )
}
