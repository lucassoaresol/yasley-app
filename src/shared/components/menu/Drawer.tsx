import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Badge, Box, Divider, Drawer, List } from '@mui/material'
import {
  Checklist,
  Groups,
  Home,
  LibraryAddCheck,
  Logout,
  People,
  School,
  Today,
  Workspaces,
} from '@mui/icons-material'
import {
  ButtonListItem,
  DialogBase,
  ListItemDrawerLink,
  ListItemLink,
  useAppThemeContext,
  useAuthContext,
  useDrawerContext,
} from '../../../shared'

export const MenuDrawer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, smDown } = useAppThemeContext()
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  const { userProfile, logout } = useAuthContext()
  const [open, setOpen] = useState(true)

  const onClose = () => setOpen((old) => !old)

  const action = () => navigate('/request')

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          display="flex"
          flexDirection="column"
          width={theme.spacing(28)}
          height="100%"
        >
          <Box width="100%" bgcolor={theme.palette.background.default} p={1}>
            <img src="/logo.webp" alt="Engercon" />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {userProfile && userProfile.requests > 0 && (
                <ListItemDrawerLink
                  icon={
                    <Badge badgeContent={userProfile.requests} color="primary">
                      <LibraryAddCheck />
                    </Badge>
                  }
                  label="Solicitações"
                  to="request"
                />
              )}
              {[
                { icon: <Home />, label: 'Página Inicial', to: '/' },
                { icon: <People />, label: 'Clientes', to: '/user' },
                { icon: <School />, label: 'Escolas', to: '/school' },
                { icon: <Workspaces />, label: 'Turmas', to: '/class' },
                { icon: <Groups />, label: 'Alunos', to: '/student' },
                { icon: <Checklist />, label: 'Frequências', to: '/frequency' },
                { icon: <Today />, label: 'Período', to: '/period' },
              ].map((el) => (
                <ListItemLink
                  key={el.label}
                  icon={el.icon}
                  to={el.to}
                  selected={location.pathname === el.to}
                  label={el.label}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ButtonListItem icon={<Logout />} label="Sair" onClick={logout} />
            </List>
          </Box>
        </Box>
      </Drawer>
      {userProfile &&
        userProfile.requests > 0 &&
        !location.pathname.includes('request') && (
          <DialogBase
            open={open}
            onClose={onClose}
            title={'Solicitações'}
            description={
              'Você possui solicitações pendentes aguardando análise.'
            }
            action={action}
            actionTitle="Verificar"
          />
        )}
    </>
  )
}
