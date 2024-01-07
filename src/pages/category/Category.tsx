import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Category } from '@mui/icons-material'
import { Chip } from '@mui/material'
import {
  useVerifyUser,
  LayoutDrawer,
  TitleBasePage,
  Tools,
  Footer,
} from '../../shared'
import { ViewCategoryPage } from './view'

export const CategoryPage = () => {
  const { user_id } = useParams()
  const { verifyUser } = useVerifyUser()

  useEffect(() => {
    if (user_id) verifyUser(user_id)
  }, [user_id, verifyUser])

  if (user_id) return <Outlet />

  return (
    <LayoutDrawer
      title={
        <TitleBasePage>
          <Chip
            label="Categorias"
            color="primary"
            icon={<Category sx={{ mr: 0.5 }} fontSize="inherit" />}
          />
        </TitleBasePage>
      }
      tools={<Tools isHome isNew titleNew="Nova" isSearch />}
    >
      <ViewCategoryPage />
      <Footer />
    </LayoutDrawer>
  )
}
