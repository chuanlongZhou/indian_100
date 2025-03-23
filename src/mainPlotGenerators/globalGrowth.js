import growthData from '@/assets/data/country_emission_growth.json'

export async function generateGlobalGrowthPlot() {
  const sorted = growthData.sort((a, b) => b["Growth Rate"] - a["Growth Rate"])
  const countries = sorted.map(d => d.Country)
  const values = sorted.map(d => +d["Growth Rate"].toFixed(2))

  return {
    title: { text: 'Global CO₂ Emission Growth (%)' },
    tooltip: { trigger: 'axis' },
    grid: {
      left: '180px',
      right: '40px',
      top: '40px',
      bottom: '40px'
    },
    xAxis: {
      type: 'value',
      name: '%'
    },
    yAxis: {
      type: 'category',
      data: countries,
      inverse: true // put highest at top
    },
    dataZoom: [
      {
        type: 'slider',
        yAxisIndex: 0,
      }
    ],
    series: [
      {
        type: 'bar',
        data: values.map((v, i) => ({
          value: v,
          itemStyle: countries[i] === 'India' ? { color: 'red' } : {}
        })),
        barWidth: 16
      }
    ]
  }
}
