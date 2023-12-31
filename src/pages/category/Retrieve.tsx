import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {
  useUserContext,
  LayoutDrawer,
  TitleUserRetrievePage,
  Tools,
  TabsUserRetrievePage,
  Footer,
} from '../../shared'
import { ViewRetrieveUserPage } from './view'

export const RetrieveCategoryPage = () => {
  const { view, user_id } = useParams()
  const { userDataRetrieve, userSelect } = useUserContext()

  useEffect(() => {
    if (user_id) {
      if (userSelect?.id !== user_id) userDataRetrieve(user_id, '')
    }
  }, [user_id])

  if (view) return <Outlet />

  return (
    <LayoutDrawer title={<TitleUserRetrievePage />} tools={<Tools isBack />}>
      <TabsUserRetrievePage value={view} />
      <ViewRetrieveUserPage />
      <Footer />
    </LayoutDrawer>
  )
}
