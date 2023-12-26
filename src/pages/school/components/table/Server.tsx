import sortArray from 'sort-array'
import { useMemo } from 'react'
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import {
  iSchoolUser,
  useAppThemeContext,
  iHeadCell,
  TableBase,
  useParamsContext,
} from '../../../../shared'

interface iTableSchoolServerPageProps {
  listData: iSchoolUser[]
}

export const TableSchoolServerPage = ({
  listData,
}: iTableSchoolServerPageProps) => {
  const { mdDown } = useAppThemeContext()
  const { order, by, onClickReset } = useParamsContext()

  const data = useMemo(() => {
    const listServer = sortArray<iSchoolUser>(listData, {
      by: order,
      order: by,
    })

    return listServer
  }, [by, listData, order])

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
    <TableBase headCells={headCells}>
      {data.map((user) => (
        <TableRow key={user.id} hover>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.cpf}</TableCell>
          <TableCell>
            <Tooltip title="Detalhar">
              <IconButton color="primary" size="small" onClick={onClickReset}>
                <Visibility fontSize="small" />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      ))}
    </TableBase>
  )
}
