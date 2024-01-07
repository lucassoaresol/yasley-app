import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, IconButton } from '@mui/material'
import { Login as LoginIcon, LockReset, Info } from '@mui/icons-material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import {
  ButtonDest,
  Glossary,
  LayoutContentFull,
  LayoutFull,
  ValidateLogin,
  recoverySchema,
  useAuthContext,
} from '../../shared'

export const RecoveryPage = () => {
  const { isAuthenticated, recovery } = useAuthContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  if (isAuthenticated) return <Navigate to="/" />

  return (
    <LayoutFull padding={6}>
      <FormContainer
        onSuccess={recovery}
        resolver={zodResolver(recoverySchema)}
      >
        <LayoutContentFull>
          <IconButton onClick={handleOpen} color="secondary">
            <Info />
          </IconButton>
          <TextFieldElement name="login" label="Usuário" required fullWidth />
          <ValidateLogin />
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LockReset />}
            type="submit"
            fullWidth
          >
            Recuperar Senha
          </Button>
          <ButtonDest
            title="Entrar"
            startIcon={<LoginIcon />}
            fullWidth
            to="/login"
          />
        </LayoutContentFull>
      </FormContainer>

      <Glossary
        open={open}
        onClose={handleOpen}
        message="Preencha o campo com seu usuário. Em seguida, você receberá um link
            no seu email cadastrado para efetuar a troca da senha."
      />
    </LayoutFull>
  )
}
