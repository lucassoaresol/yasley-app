import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import {
  LayoutContentFull,
  LayoutFull,
  SelectClass,
  iClass,
  schoolUpdateSchema,
} from '../../shared'

export const EditClassPage = () => {
  const navigate = useNavigate()
  // const { updateSchool, schoolSelect } = useSchoolContext();
  const [classSelect, setClassSelect] = useState<iClass>()

  useEffect(() => {
    setClassSelect(undefined)
  }, [])

  return (
    <>
      <LayoutFull>
        <FormContainer
          // onSuccess={(data) => {
          //   if (schoolSelect)
          //     updateSchool(data, schoolSelect.id, "nome", undefined, back);
          // }}
          resolver={zodResolver(schoolUpdateSchema)}
        >
          <LayoutContentFull>
            {classSelect && (
              <Box>
                <Typography>Informações Atuais</Typography>
                <Typography>Nome da Turma: {classSelect.name}</Typography>
                {/* <Typography>Escola da Turma: {schoolSelect?.name}</Typography> */}
              </Box>
            )}

            <TextFieldElement
              name="name"
              label="Nome da Turma"
              required
              fullWidth
            />
            <Button variant="contained" type="submit" fullWidth>
              Enviar
            </Button>
          </LayoutContentFull>
        </FormContainer>
      </LayoutFull>
      <Dialog open={!classSelect} onClose={() => navigate('/')}>
        <DialogTitle>Editar Turma</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione a turma que você deseja editar.
          </DialogContentText>
          <FormContainer>
            <Box mt={1} display="flex" flexDirection="column" gap={1}>
              <SelectClass />
            </Box>
          </FormContainer>
          <DialogActions>
            <Button onClick={() => navigate('/')}>Cancelar</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  )
}
