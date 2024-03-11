'use client'
import { Inter } from 'next/font/google'
import Grid from '@mui/material/Unstable_Grid2'
import { Sidebar } from '@/components'
import {
  Breadcrumbs,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalStyles from '@mui/material/GlobalStyles'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    button: {
      fontStyle: 'italic',
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const path = usePathname()
  const pathlist = path.split('/').filter((el) => !!el)

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <div style={{ display: 'flex', width: '100vw' }}>
            <Sidebar />

            <div
              style={{
                background: '#F8FAFB',
                width: 'calc(100% - 2rem)',
              }}
            >
              <Grid2 container lg={12}>
                <div style={{ width: 'calc(100% - 2rem)', marginLeft: '1rem' }}>
                  <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{ marginTop: '1.25rem' }}
                  >
                    {pathlist.length ? (
                      pathlist.map((item) => (
                        <Link
                          color="inherit"
                          href="/"
                          key={item}
                          style={{ textTransform: 'capitalize' }}
                        >
                          {item.split('-').join(' ')}
                        </Link>
                      ))
                    ) : (
                      <Link color="inherit" href="/">
                        Dashboard
                      </Link>
                    )}
                  </Breadcrumbs>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#2B3674',
                      marginBottom: '1.5rem',
                      textTransform: 'capitalize',
                    }}
                  >
                    {pathlist[pathlist.length - 1]?.split('-').join(' ') ||
                      'Main Dashboard'}
                  </Typography>
                  {children}
                </div>
              </Grid2>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
