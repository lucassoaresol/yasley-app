import { useNavigate } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'
import { iUser } from '../../../shared'

interface iCardUserProps {
  user: iUser
}

export const CardUser = ({ user }: iCardUserProps) => {
  const navigate = useNavigate()

  return (
    <TableRow
      hover
      sx={{ cursor: 'pointer' }}
      onClick={() => navigate(`/user?id=${user.id}`)}
    >
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.cpf}</TableCell>
    </TableRow>
  )
}
