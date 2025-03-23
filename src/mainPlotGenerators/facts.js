import indiaData from '@/assets/data/India_data.json'

export async function generateFactsPlot() {
  // Filter data up to 2024
  const filtered = indiaData.filter(d => d.Year <= 2024)

  const years = filtered.map(d => d.Year)

  const base = filtered[0]

  const basePV = base["PV_Mass_Market_Volume(Millions)"]
  const baseElectricity = base["Electricity Consumption(TWh)"]
  const baseCoal = base["Coal Consumption(Mt)"]

  const pv = filtered.map(d =>
    d["PV_Mass_Market_Volume(Millions)"] != null && basePV != null
      ? +(((d["PV_Mass_Market_Volume(Millions)"] - basePV) / basePV) * 100).toFixed(2)
      : null
  )

  const electricity = filtered.map(d =>
    d["Electricity Consumption(TWh)"] != null && baseElectricity != null
      ? +(((d["Electricity Consumption(TWh)"] - baseElectricity) / baseElectricity) * 100).toFixed(2)
      : null
  )

  const coal = filtered.map(d =>
    d["Coal Consumption(Mt)"] != null && baseCoal != null
      ? +(((d["Coal Consumption(Mt)"] - baseCoal) / baseCoal) * 100).toFixed(2)
      : null
  )

  return {
    title: { text: 'Indian Energy and Market Facts (% Change)' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: [
        'PV Market Volume (Millions)',
        'Electricity Consumption (TWh)',
        'Coal Consumption (Mt)'
      ]
    },
    color: ['#1f77b4', '#2ca02c', '#d62728'],
    xAxis: { type: 'category', data: years },
    yAxis: { type: 'value', name: '%' },
    series: [
      {
        name: 'PV Market Volume (Millions)',
        type: 'line',
        data: pv,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'Electricity Consumption (TWh)',
        type: 'line',
        data: electricity,
        connectNulls: true,
        symbolSize: 6
      },
      {
        name: 'Coal Consumption (Mt)',
        type: 'line',
        data: coal,
        connectNulls: true,
        symbolSize: 6
      }
    ]
  }
}
