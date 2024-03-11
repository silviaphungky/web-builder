import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Card, Typography } from '@mui/material'
import { IconDollarCircle, IconEarning } from '@/components/icons'
import { BarCard, ChartCard } from './pages/dashboard/components'

export default function Home() {
  return (
    <main>
      <Grid2 container spacing={2}>
        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Grid2 container alignItems={'center'} spacing={2}>
              <Grid2 lg={3}>
                <IconEarning />
              </Grid2>
              <Grid2 lg={9}>
                <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
                  Earnings
                </Typography>
                <Typography variant="h4" sx={{ color: '#2B3674' }}>
                  $350.4
                </Typography>
              </Grid2>
            </Grid2>
          </Card>
        </Grid2>

        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Grid2 container spacing={2} alignItems={'center'}>
              <Grid2 lg={3}>
                <IconDollarCircle />
              </Grid2>
              <Grid2 lg={9}>
                <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
                  Spend this month
                </Typography>
                <Typography variant="h4" sx={{ color: '#2B3674' }}>
                  $642.39
                </Typography>
              </Grid2>
            </Grid2>
          </Card>
        </Grid2>

        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
              Sales
            </Typography>
            <Typography variant="h4" sx={{ color: '#2B3674' }}>
              $574.34
            </Typography>
          </Card>
        </Grid2>
        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Grid2 container alignItems={'center'} spacing={2}>
              <Grid2 lg={9}>
                <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
                  Your balance
                </Typography>
                <Typography variant="h4" sx={{ color: '#2B3674' }}>
                  $1,000
                </Typography>
              </Grid2>
              <Grid2 lg={3}>
                <IconEarning />
              </Grid2>
            </Grid2>
          </Card>
        </Grid2>

        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Grid2 container alignItems={'center'} spacing={2}>
              <Grid2 lg={3}>
                <IconEarning />
              </Grid2>
              <Grid2 lg={9}>
                <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
                  New Tasks
                </Typography>
                <Typography variant="h4" sx={{ color: '#2B3674' }}>
                  154
                </Typography>
              </Grid2>
            </Grid2>
          </Card>
        </Grid2>

        <Grid2 lg={2}>
          <Card sx={{ padding: '0.75rem', borderRadius: '1.25rem' }}>
            <Grid2 container alignItems={'center'} spacing={2}>
              <Grid2 lg={3}>
                <IconEarning />
              </Grid2>
              <Grid2 lg={9}>
                <Typography variant="subtitle1" sx={{ color: '#A3AED0' }}>
                  Total Projects
                </Typography>
                <Typography variant="h4" sx={{ color: '#2B3674' }}>
                  2935
                </Typography>
              </Grid2>
            </Grid2>
          </Card>
        </Grid2>
      </Grid2>

      <Grid2 spacing={2} container>
        <Grid2 lg={6}>
          <ChartCard />
        </Grid2>
        <Grid2 lg={6}>
          <BarCard />
        </Grid2>
      </Grid2>
    </main>
  )
}
