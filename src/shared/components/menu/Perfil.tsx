import { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import {
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
} from '@mui/material'

interface iMenuPerfilProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onClose: () => void
}

export const MenuPerfil = ({
  anchorEl,
  onClick,
  onClose,
  open,
}: iMenuPerfilProps) => {
  const location = useLocation()

  return (
    <>
      <Tooltip title="Perfil">
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={onClick}
        >
          <AccountCircle fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton
            autoFocus={true}
            onClick={onClose}
            component={Link}
            to="/profile/edit"
            selected={location.pathname === '/profile/edit'}
          >
            <ListItemText primary="Editar Perfil" />
          </ListItemButton>
          <ListItemButton
            autoFocus={true}
            onClick={onClose}
            component={Link}
            to="/profile/edit/password"
            selected={location.pathname === '/profile/edit/password'}
          >
            <ListItemText primary="Editar Senha" />
          </ListItemButton>
        </List>
      </Menu>
    </>
  )
}
