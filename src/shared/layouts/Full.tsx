import { Box, Container, Paper, useMediaQuery } from '@mui/material'
import { iChildren, useAppThemeContext } from '../../shared'

interface iLayoutFullProps extends iChildren {
  padding?: number
}

export const LayoutFull = ({ children, padding = 8 }: iLayoutFullProps) => {
  const { theme } = useAppThemeContext()
  const matches = useMediaQuery('(max-width:395px)')

  return (
    <Box bgcolor={theme.palette.background.default}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
          alignItems: 'center',
        }}
      >
        <Box
          component={Paper}
          width="100vw"
          maxWidth={400}
          display="flex"
          justifyContent="center"
          padding={matches ? 0 : padding}
          paddingTop={padding}
          paddingBottom={padding}
        >
          {children}
        </Box>
      </Container>
    </Box>
  )
}
