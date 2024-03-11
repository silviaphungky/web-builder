'use client'
import { Card, CardContent, Typography } from '@mui/material'
import { BarChart, ChartContainer, LinePlot, MarkPlot } from '@mui/x-charts'

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]
const xLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul']

const BarCard = () => {
  return (
    <Card sx={{ borderRadius: '1.25rem' }}>
      <CardContent>
        <Typography variant="h4">Weekly Revenue</Typography>
        <BarChart
          sx={{ rx: 15 }}
          series={[
            {
              data: [3, 4, 1, 6, 5],
              stack: 'A',
              color: '#4318FF',
            },
            {
              data: [4, 3, 1, 5, 8],
              stack: 'A',
              color: '#6AD2FF',
            },
            {
              data: [4, 2, 5, 4, 1],
              stack: 'A',
              color: '#EFF4FB',
            },
          ]}
          leftAxis={null}
          width={600}
          height={300}
        />
      </CardContent>
    </Card>
  )
}

export default BarCard
