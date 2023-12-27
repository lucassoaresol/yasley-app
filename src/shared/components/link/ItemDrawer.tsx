import { ReactNode, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ListItemLink, useDrawerContext } from '../../../shared'

export interface iOtherListItemLinkProps {
  icon: ReactNode
  label: string
  baseHref?: string
  to?: string
}

export const ListItemDrawerLink = ({
  icon,
  label,
  baseHref = '/',
  to = '',
}: iOtherListItemLinkProps) => {
  const { handleClick } = useDrawerContext()
  const href = baseHref + to
  const location = useLocation()

  const selected = useMemo(() => {
    if (baseHref.length > 1) {
      if (to === '/frequency')
        return (
          location.pathname === href || location.pathname.includes(href + '/')
        )
      return location.pathname === href
    }

    return location.pathname === href || location.pathname.includes(href + '/')
  }, [baseHref.length, href, location.pathname, to])

  return (
    <ListItemLink
      onClick={handleClick}
      selected={selected}
      to={href}
      icon={icon}
      label={label}
    />
  )
}
