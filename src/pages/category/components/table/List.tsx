import sortArray from 'sort-array'
import { useMemo } from 'react'
import { TableRow, TableCell } from '@mui/material'
import {
  iUser,
  iHeadCell,
  TableBase,
  LinkText,
  TableCellDataLoading,
  ActionsActive,
  useParamsContext,
} from '../../../../shared'

interface iTableUserPageProps {
  listData: iUser[]
  handleUser: (newUser: iUser) => void
}

export const TableUserPage = ({
  handleUser,
  listData,
}: iTableUserPageProps) => {
  const { order, by, isLoading, onClickReset, handleBack, back } =
    useParamsContext()

  const onClickDetail = () => {
    handleBack(back, '/user')
    onClickReset()
  }

  const data = useMemo(() => {
    return sortArray<iUser>(listData, { by: order, order: by })
  }, [by, listData, order])

  const headCells: iHeadCell[] = [
    { order: 'name', numeric: 'left', label: 'Nome' },
    { numeric: 'left', label: 'Ações' },
  ]

  return (
    <TableBase headCells={headCells} message="Nenhuma categoria encotrada">
      {data.map((user) => {
        const { id, name, is_active, cpf } = user
        const to = `/user/${user.id}`
        const handleData = () => handleUser(user)

        return (
          <TableRow key={id} hover>
            <TableCell>
              {is_active ? (
                <LinkText
                  isLoading={isLoading}
                  label={name}
                  width={250}
                  to={to}
                  onClick={onClickDetail}
                />
              ) : (
                name
              )}
            </TableCell>
            <TableCellDataLoading loading={isLoading}>
              {cpf}
            </TableCellDataLoading>
            <ActionsActive
              handleData={handleData}
              is_active={is_active}
              to={to}
              back="/user"
            />
          </TableRow>
        )
      })}
    </TableBase>
  )
}
