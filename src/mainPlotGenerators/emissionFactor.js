import indiaData from '@/assets/data/India_data.json'

export async function generateEmissionFactorPlot() {
  // Filter the data where Year <= 2024
  const filtered = indiaData.filter(d => d.Year <= 2023)

  const years = filtered.map(d => d.Year)
  const india = filtered.map(d => d["India CO₂ Emmission Factor(tCO2/toe)"].toFixed(2))
  const global = filtered.map(d => d["Global CO₂ Emmission Factor(tCO2/toe)"].toFixed(2))

  return {
    title: { text: 'Emission Factor (tCO₂/toe)' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['India', 'Global'] },
    xAxis: { type: 'category', data: years },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'India',
        type: 'line',
        data: india,
        areaStyle: {},
        symbolSize: 6,
        itemStyle: { color: '#1f77b4' }
      },
      {
        name: 'Global',
        type: 'line',
        data: global,
        areaStyle: {},
        symbolSize: 6,
        itemStyle: { color: '#6fc785' }
      }
    ],
    color: ['#1f77b4', '#6fc785'] // consistent legend colors
  }
}
