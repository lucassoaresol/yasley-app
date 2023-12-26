import { TableRow, TableCell } from '@mui/material'
import { useMemo } from 'react'
import {
  iSchoolUser,
  useAppThemeContext,
  iHeadCell,
  TableBase,
  DialogCreateServer,
} from '../../../../shared'

interface iTableUserSchoolProps {
  data: iSchoolUser[]
  school_id: string
  getServer: (query: string) => void
}

export const TableUserSchool = ({
  data,
  getServer,
  school_id,
}: iTableUserSchoolProps) => {
  const { mdDown } = useAppThemeContext()

  const headCells: iHeadCell[] = useMemo(() => {
    if (mdDown)
      return [
        { order: 'name', numeric: 'left', label: 'Nome Completo' },
        { numeric: 'left', label: 'CPF' },
        { numeric: 'left', label: 'Ações' },
      ]

    return [
      { order: 'name', numeric: 'left', label: 'Nome Completo' },
      { numeric: 'left', label: 'CPF' },
      { numeric: 'left', label: 'Ações' },
    ]
  }, [mdDown])

  return (
    <>
      <TableBase headCells={headCells}>
        {data.map((user) => (
          <TableRow key={user.id} hover>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.cpf}</TableCell>
          </TableRow>
        ))}
      </TableBase>
      <DialogCreateServer getServer={getServer} school_id={school_id} />
    </>
  )
}
