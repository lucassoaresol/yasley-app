import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  useSchoolContext,
  useParamsContext,
  iSchool,
  iWorkSchool,
  apiUser,
} from '../../../shared'
import { BaseSchool, ListBase, Loading } from './structure'

export const SelectSchool = () => {
  const { schoolRetrieve } = useSchoolContext()
  const { query } = useParamsContext()
  const [listSchoolSelect, setListSchoolSelect] = useState<iSchool[]>()
  const [listData, setListData] = useState<iWorkSchool[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const queryData = query() + '&is_active=true'
    setLoading(true)
    apiUser
      .schools(queryData)
      .then((res) => {
        setListSchoolSelect(res.schools)
        setListData(res.result)
      })
      .finally(() => setLoading(false))
  }, [query])

  const openDialog = useMemo(() => {
    if (listSchoolSelect?.length === 0) {
      return false
    }
    return !schoolRetrieve
  }, [listSchoolSelect, schoolRetrieve])

  const handleOpenDialog = useCallback(() => setListSchoolSelect(undefined), [])

  return (
    <BaseSchool
      onClick={handleOpenDialog}
      open={openDialog}
      loading={!listSchoolSelect}
      options={listSchoolSelect}
    >
      {loading ? (
        <Loading />
      ) : (
        listData?.map((el) => (
          <ListBase
            key={el.school.id}
            name={el.school.name}
            onClick={() => {
              setListSchoolSelect(undefined)
            }}
          />
        ))
      )}
    </BaseSchool>
  )
}
