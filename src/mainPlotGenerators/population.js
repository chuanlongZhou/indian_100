import indiaData from '@/assets/data/India_data.json'

export async function generatePopulationPlot() {
  const base = indiaData[0]
  const basePop = base["Population"]
  const baseUrban = base["Urban Population"]

  const years = indiaData.map(d => d.Year)

  const popHist = []
  const popProj = []
  const urbanHist = []
  const urbanProj = []

  for (let i = 0; i < indiaData.length; i++) {
    const { Year, Population, ["Urban Population"]: UrbanPop } = indiaData[i]

    const popVal = Population != null && basePop != null
      ? (((Population - basePop) / basePop) * 100).toFixed(2)
      : null

    const urbanVal = UrbanPop != null && baseUrban != null
      ? (((UrbanPop - baseUrban) / baseUrban) * 100).toFixed(2)
      : null

    if (Year < 2023) {
      popHist.push(popVal)
      popProj.push(null)
      urbanHist.push(urbanVal)
      urbanProj.push(null)
    } else if (Year === 2023) {
      popHist.push(popVal)
      popProj.push(popVal)
      urbanHist.push(urbanVal)
      urbanProj.push(urbanVal)
    } else {
      popHist.push(null)
      popProj.push(popVal)
      urbanHist.push(null)
      urbanProj.push(urbanVal)
    }
  }

  return {
    title: { text: 'Indian Population Growth (%)' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: [
        'Population (Historical)',
        'Population (Projection)',
        'Urban Population (Historical)',
        'Urban Population (Projection)'
      ]
    },
    color: ['#1f77b4', '#1f77b4', '#d62728', '#d62728'], // 💡 This fixes the legend color mismatch
    xAxis: { type: 'category', data: years },
    yAxis: { type: 'value', name: '%' },
    series: [
      {
        name: 'Population (Historical)',
        type: 'line',
        data: popHist,
        connectNulls: true,
        lineStyle:{
            width: 3,
        },
        symbolSize: 8,
      },
      {
        name: 'Population (Projection)',
        type: 'line',
        data: popProj,
        connectNulls: true,
        showSymbol: false,
        lineStyle: { type: 'dashed' }
      },
      {
        name: 'Urban Population (Historical)',
        type: 'line',
        data: urbanHist,
        connectNulls: true,
        lineStyle:{
            width: 5,
        },
        symbolSize: 8,
      },
      {
        name: 'Urban Population (Projection)',
        type: 'line',
        data: urbanProj,
        connectNulls: true,
        showSymbol: false,
        lineStyle: { type: 'dashed' }
      }
    ]
  }
}
