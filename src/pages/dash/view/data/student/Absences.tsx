import sortArray from 'sort-array'
import { useParams } from 'react-router-dom'
import { useState, useCallback, useEffect, useMemo } from 'react'
import {
  PaginationTable,
  apiStudent,
  iStudentResume,
  useAuthContext,
  useDebounce,
  usePaginationContext,
  useParamsContext,
} from '../../../../../shared'
import { TableDashboardSchoolStudentAbsencesPage } from '../../../components'

export const ViewDashboardSchoolStudentAbsencesPage = () => {
  const { school_id } = useParams()
  const { debounce } = useDebounce()
  const { yearData } = useAuthContext()
  const { setIsLoading, search, order, by } = useParamsContext()
  const { setCount, setFace, query_page, handleFace, face } =
    usePaginationContext()
  const [listData, setListData] = useState<iStudentResume[]>([])

  const year_id_data = useMemo(() => {
    if (yearData) return yearData.id
    return ''
  }, [yearData])

  const getStudent = useCallback(
    (year_id: string, query: string, isFace?: boolean) => {
      setIsLoading(true)
      if (isFace) {
        apiStudent
          .resume(year_id, query)
          .then((res) => setListData((old) => old?.concat(res.result)))
          .finally(() => setIsLoading(false))
      } else {
        apiStudent
          .resume(year_id, query)
          .then((res) => {
            setFace(1)
            setListData(res.result)
            setCount(res.total)
          })
          .finally(() => setIsLoading(false))
      }
    },
    [],
  )

  const define_query = useCallback(
    (comp: string) => {
      return `?school_id=${school_id}${comp}${query_page()}`
    },
    [query_page, school_id],
  )

  const onClick = () =>
    getStudent(year_id_data, define_query(handleFace(face)), true)

  useEffect(() => {
    let query_data = ''
    if (search) {
      query_data += `&name=${search}`
      debounce(() => {
        getStudent(year_id_data, define_query(query_data))
      })
    } else getStudent(year_id_data, define_query(query_data))
  }, [define_query, search, year_id_data])

  const data = useMemo(() => {
    let listStundet: iStudentResume[]

    if (order === 'class_name')
      listStundet = sortArray<iStudentResume>(listData, {
        by: order,
        order: by,
        computed: { class_name: (row) => row.class.name },
      })

    listStundet = sortArray<iStudentResume>(listData, {
      by: order,
      order: by,
    })

    return listStundet
  }, [by, listData, order])

  return (
    <>
      <TableDashboardSchoolStudentAbsencesPage data={data} />
      <PaginationTable
        total={listData ? listData.length : 0}
        onClick={onClick}
      />
    </>
  )
}
