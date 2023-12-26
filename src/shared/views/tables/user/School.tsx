import { Fragment, useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, TableCell, TableRow } from '@mui/material'
import {
  iUser,
  useAppThemeContext,
  iHeadCell,
  TableBase,
  useParamsContext,
} from '../../../../shared'

interface iTableUserSchoolProps {
  data: iUser[]
  school_id: string
}

export const TableUserSchool = ({ data, school_id }: iTableUserSchoolProps) => {
  const { mdDown } = useAppThemeContext()
  const { onClickReset } = useParamsContext()

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
        <Fragment key={user.id}>
          {user.work_school && (
            <TableRow hover>
              <TableCell>
                <Link
                  underline="none"
                  variant="body2"
                  color="inherit"
                  component={RouterLink}
                  to={`/user/${user.id}?school_id=${school_id}`}
                  onClick={onClickReset}
                >
                  {user.name}
                </Link>
              </TableCell>
              <TableCell>{user.cpf}</TableCell>
            </TableRow>
          )}
        </Fragment>
      ))}
    </TableBase>
  )
}
