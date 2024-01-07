import { MouseEvent, useState } from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { AccountCircle, Settings } from '@mui/icons-material'
import {
  MenuLayout,
  adaptName,
  useAppThemeContext,
  useAuthContext,
} from '../../../shared'

export const HeaderLayout = () => {
  const { theme, smDown } = useAppThemeContext()
  const { userProfile } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openConfig, setOpenConfig] = useState(false)
  const [openPerfil, setOpenPerfil] = useState(false)

  const handleClickConfig = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenConfig(true)
  }

  const handleClickPerfil = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenPerfil(true)
  }

  const handleCloseConfig = () => {
    setAnchorEl(null)
    setOpenConfig(false)
  }

  const handleClosePerfil = () => {
    setAnchorEl(null)
    setOpenPerfil(false)
  }

  const user = {
    name: smDown ? adaptName(userProfile?.name) : userProfile?.name,
    src: userProfile?.profile?.url,
  }

  return (
    <Box pt={1} pl={1} pr={2} display="flex" justifyContent="space-between">
      <Box display="flex">
        <MenuLayout
          anchorEl={anchorEl}
          onClick={handleClickPerfil}
          onClose={handleClosePerfil}
          open={openPerfil}
          title="Perfil"
          icon={<AccountCircle fontSize="small" />}
          options={[
            { to: '/profile/edit', value: 'Editar Perfil' },
            { to: '/profile/edit/password', value: 'Editar Senha' },
          ]}
        />
        <MenuLayout
          anchorEl={anchorEl}
          onClick={handleClickConfig}
          onClose={handleCloseConfig}
          open={openConfig}
          title="Configurações"
          icon={<Settings fontSize="small" />}
          options={
            userProfile?.is_super
              ? [
                  { to: '/user', value: 'Usuários' },
                  // { to: '/user', value: 'Permissões' },
                  { to: '/category', value: 'Categorias' },
                ]
              : [{ to: '/category', value: 'Categorias' }]
          }
        />
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography>{user.name}</Typography>
        <Avatar
          src={user.src}
          sx={{
            bgcolor: theme.palette.primary.main,
            width: 30,
            height: 30,
          }}
        />
      </Box>
    </Box>
  )
}
