import sortArray from 'sort-array'
import { useMemo } from 'react'
import { TableRow } from '@mui/material'
import {
  iSchool,
  iHeadCell,
  TableBase,
  TableCellDataLoading,
  useParamsContext,
} from '../../../../shared'

interface iTableUserSchoolPageProps {
  listData: iSchool[]
}

export const TableUserSchoolPage = ({
  listData,
}: iTableUserSchoolPageProps) => {
  const { order, by, isLoading } = useParamsContext()

  const data = useMemo(() => {
    return sortArray<iSchool>(listData, { by: order, order: by })
  }, [by, listData, order])

  const headCells: iHeadCell[] = useMemo(() => {
    return [
      { order: 'name', numeric: 'left', label: 'Escola' },

      { numeric: 'left', label: 'Ações' },
    ]
  }, [])

  return (
    <TableBase headCells={headCells} message="Nenhuma escola encotrada">
      {data.map((el) => {
        const { key, name } = el
        return (
          <TableRow key={key} hover>
            <TableCellDataLoading loading={isLoading} width={250}>
              {name}
            </TableCellDataLoading>
          </TableRow>
        )
      })}
    </TableBase>
  )
}
