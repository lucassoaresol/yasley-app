import { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Settings } from '@mui/icons-material'
import {
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
} from '@mui/material'

interface iMenuConfigProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onClose: () => void
}

export const MenuConfig = ({
  anchorEl,
  onClick,
  onClose,
  open,
}: iMenuConfigProps) => {
  const location = useLocation()

  return (
    <>
      <Tooltip title="Configurações">
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={onClick}
        >
          <Settings fontSize="small" />
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
            to="/user"
            selected={location.pathname === '/user'}
          >
            <ListItemText primary="Usuários" />
          </ListItemButton>
        </List>
      </Menu>
    </>
  )
}
