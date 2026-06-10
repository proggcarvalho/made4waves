export const COORDENADAS_AGRUPADAS = {
  'Distrito de Leiria': {
    'Praia da Vieira': { lat: 39.875, lon: -8.966 },
    'Praia do Pedrógão': { lat: 39.923, lon: -8.948 },
    'São Pedro de Moel': { lat: 39.757, lon: -9.030 },
    'Paredes da Vitória': { lat: 39.700, lon: -9.053 },
    'Nazaré': { lat: 39.6011, lon: -9.083 },
    'Peniche': { lat: 39.3558, lon: -9.3811 }
  },
  'Distrito de Lisboa': {
    'Ericeira': { lat: 38.961, lon: -9.4191 },
    'Carcavelos': { lat: 38.6796, lon: -9.3366 },
    'Guincho': { lat: 38.731, lon: -9.474 }
  },
  'Distrito do Porto': {
    'Matosinhos': { lat: 41.178, lon: -8.694 },
    'Leça da Palmeira': { lat: 41.192, lon: -8.708 }
  },
  'Distrito de Faro': {
    'Faro': { lat: 37.0194, lon: -7.9322 },
    'Sagres': { lat: 37.007, lon: -8.939 }
  }
};

export async function obterCondicoes(praiaSelecionada) {
  let coords = null;
  for (const distrito in COORDENADAS_AGRUPADAS) {
    if (COORDENADAS_AGRUPADAS[distrito][praiaSelecionada]) {
      coords = COORDENADAS_AGRUPADAS[distrito][praiaSelecionada];
      break;
    }
  }

  if (!coords) return null;
  const { lat, lon } = coords;

  try {
    // Adicionado o parâmetro 'sea_surface_temperature' no final do urlMar
    const urlMar = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height,wave_period,sea_surface_temperature`;
    const resMar = await fetch(urlMar);
    const dadosMar = await resMar.json();

    const urlVento = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m,wind_direction_10m`;
    const resVento = await fetch(urlVento);
    const dadosVento = await resVento.json();

    return {
      onda: dadosMar.current.wave_height,
      periodo: dadosMar.current.wave_period,
      vento: dadosVento.current.wind_speed_10m,
      direcaoVento: dadosVento.current.wind_direction_10m,
      tempAgua: dadosMar.current.sea_surface_temperature // Capturamos a temperatura da água aqui
    };
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
    return null;
  }
}