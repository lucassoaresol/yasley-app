import { MouseEvent, ReactNode, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
  Typography,
} from '@mui/material'
import { AccountCircle, Menu as MenuIcon, Settings } from '@mui/icons-material'
import {
  ButtonTop,
  MenuDrawer,
  adaptName,
  iChildren,
  useAppThemeContext,
  useAuthContext,
  useDrawerContext,
} from '../../shared'

interface iLayoutBasePageProps extends iChildren {
  title: ReactNode
  tools?: ReactNode
}

export const LayoutBasePage = ({
  children,
  title,
  tools,
}: iLayoutBasePageProps) => {
  const { theme, smDown } = useAppThemeContext()
  const { toggleDrawerOpen } = useDrawerContext()
  const { userProfile } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const user = {
    name: smDown ? adaptName(userProfile?.name) : userProfile?.name,
    src: userProfile?.profile?.url,
  }

  const elem = useRef<HTMLElement>(null)

  return (
    <>
      <MenuDrawer />
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Box
          bgcolor={theme.palette.background.default}
          height="100%"
          display="flex"
          flexDirection="column"
          gap={1}
          paddingLeft={smDown ? 0 : 2}
        >
          <Box
            pt={1}
            pl={1}
            pr={2}
            display="flex"
            justifyContent="space-between"
          >
            <Box display="flex">
              <Tooltip title="Perfil">
                <IconButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <AccountCircle fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Configurações">
                <IconButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Settings fontSize="small" />
                </IconButton>
              </Tooltip>
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
          <Box pl={1} display="flex" alignItems="center" gap={1}>
            {smDown && (
              <IconButton color="primary" onClick={toggleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            )}
            {title}
          </Box>
          {tools && <Box>{tools}</Box>}
          <Box ref={elem} flex={1} overflow="auto">
            {children}
            <ButtonTop elem={elem} />
          </Box>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton
            autoFocus={true}
            onClick={handleClose}
            component={Link}
            to="/profile/edit"
          >
            <ListItemText primary="Editar Perfil" />
          </ListItemButton>
          <ListItemButton
            autoFocus={true}
            onClick={handleClose}
            component={Link}
            to="/profile/edit/password"
          >
            <ListItemText primary="Editar Senha" />
          </ListItemButton>
        </List>
      </Menu>
    </>
  )
}
