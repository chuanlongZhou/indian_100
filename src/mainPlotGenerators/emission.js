import indiaData from '@/assets/data/India_data.json'

export async function generateEmissionPlot() {
  const base = indiaData[0]

  const baseValues = {
    co2: base["Annual CO₂ emissions"],
    energyPerGDP: base["Primary energy consumption per GDP (kWh/$)"],
    gdpPerCap: base["GDP per capita"],
    co2PerKWh: base["Annual CO₂ emissions per unit energy (kg per kilowatt-hour)"],
    co2PerGDP: base["Annual CO₂ emissions per GDP (kg per international-$)"]
  }

  // Filter data up to and including 2024
  const filtered = indiaData.filter(d => d.Year <= 2024)
  const years = filtered.map(d => d.Year)

  const co2 = filtered.map(d =>
    d["Annual CO₂ emissions"] != null && baseValues.co2 != null
      ? +(((d["Annual CO₂ emissions"] - baseValues.co2) / baseValues.co2) * 100).toFixed(2)
      : null
  )

  const energyPerGDP = filtered.map(d =>
    d["Primary energy consumption per GDP (kWh/$)"] != null && baseValues.energyPerGDP != null
      ? +(((d["Primary energy consumption per GDP (kWh/$)"] - baseValues.energyPerGDP) / baseValues.energyPerGDP) * 100).toFixed(2)
      : null
  )

  const gdpPerCap = filtered.map(d =>
    d["GDP per capita"] != null && baseValues.gdpPerCap != null
      ? +(((d["GDP per capita"] - baseValues.gdpPerCap) / baseValues.gdpPerCap) * 100).toFixed(2)
      : null
  )

  const co2PerKWh = filtered.map(d =>
    d["Annual CO₂ emissions per unit energy (kg per kilowatt-hour)"] != null && baseValues.co2PerKWh != null
      ? +(((d["Annual CO₂ emissions per unit energy (kg per kilowatt-hour)"] - baseValues.co2PerKWh) / baseValues.co2PerKWh) * 100).toFixed(2)
      : null
  )

  const co2PerGDP = filtered.map(d =>
    d["Annual CO₂ emissions per GDP (kg per international-$)"] != null && baseValues.co2PerGDP != null
      ? +(((d["Annual CO₂ emissions per GDP (kg per international-$)"] - baseValues.co2PerGDP) / baseValues.co2PerGDP) * 100).toFixed(2)
      : null
  )

  return {
    title: { text: 'Indian Emission Drivers (% change)' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: [
        'CO₂ Emissions',
        'Energy per GDP',
        'GDP per Capita',
        'CO₂ per kWh',
        'CO₂ per GDP'
      ]
    },
    color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#9467bd', '#8c564b'],
    xAxis: { type: 'category', data: years },
    yAxis: { type: 'value', name: '%' },
    series: [
      {
        name: 'CO₂ Emissions',
        type: 'line',
        data: co2,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'Energy per GDP',
        type: 'line',
        data: energyPerGDP,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'GDP per Capita',
        type: 'line',
        data: gdpPerCap,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'CO₂ per kWh',
        type: 'line',
        data: co2PerKWh,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'CO₂ per GDP',
        type: 'line',
        data: co2PerGDP,
        connectNulls: true,
        symbolSize: 6
      }
    ]
  }
}
