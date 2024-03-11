'use client'
import { Card, CardContent } from '@mui/material'
import { ChartContainer, LinePlot, MarkPlot } from '@mui/x-charts'

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]
const xLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul']

const ChartCard = () => {
  return (
    <Card sx={{ borderRadius: '1.25rem' }}>
      <CardContent>
        <ChartContainer
          width={500}
          height={300}
          series={[{ type: 'line', data: pData }]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          sx={{
            '.MuiLineElement-root': {
              stroke: '#8884d8',
              strokeWidth: 2,
            },
            '.MuiMarkElement-root': {
              stroke: '#8884d8',
              scale: '0.6',
              fill: '#fff',
              strokeWidth: 2,
            },
          }}
          // disableAxisListener
        >
          <LinePlot />
          <MarkPlot />
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartCard
