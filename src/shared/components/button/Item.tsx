import { ReactNode } from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface iButtonListItemProps {
  icon?: ReactNode
  label: string
  onClick?: () => void
}

export const ButtonListItem = ({
  label,
  icon,
  onClick,
}: iButtonListItemProps) => {
  return (
    <ListItemButton onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
