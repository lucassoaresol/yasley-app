/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { createTheme, LinkProps } from '@mui/material'
import { ptBR } from '@mui/material/locale'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})

export const Theme = createTheme(
  {
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
    palette: {
      primary: {
        main: '#102635',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#e1a02c',
        contrastText: '#FFFFFF',
      },
      background: { default: '#bab6a8', paper: '#f0eeec' },
    },
  },
  ptBR,
)
