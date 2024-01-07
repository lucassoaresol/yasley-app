import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { FirstPage } from '../../../pages'
import { CompLoading, useAuthContext } from '../../../shared'

export const ProtectedAuth = () => {
  const { profileUser, isAuthenticated } = useAuthContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    profileUser()
    setLoading(false)
  }, [profileUser])

  return loading ? (
    <CompLoading loading={loading} />
  ) : isAuthenticated ? (
    <FirstPage>
      <Outlet />
    </FirstPage>
  ) : (
    <Navigate to="/login" />
  )
}
