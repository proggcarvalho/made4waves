// Coordenadas das nossas praias principais
const COORDENADAS = {
  'Nazaré': { lat: 39.6011, lon: -9.083 },
  'Peniche': { lat: 39.3558, lon: -9.3811 },
  'Ericeira': { lat: 38.961, lon: -9.4191 },
  'Carcavelos': { lat: 38.6796, lon: -9.3366 }
};

export async function obterCondicoes(praia) {
  const { lat, lon } = COORDENADAS[praia];

  try {
    // 1. Ir buscar as condições do mar (Onda e Período)
    const urlMar = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height,wave_period`;
    const resMar = await fetch(urlMar);
    const dadosMar = await resMar.json();

    // 2. Ir buscar as condições do vento (Velocidade)
    const urlVento = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m`;
    const resVento = await fetch(urlVento);
    const dadosVento = await resVento.json();

    // 3. Juntar e devolver tudo limpinho
    return {
      onda: dadosMar.current.wave_height,
      periodo: dadosMar.current.wave_period,
      vento: dadosVento.current.wind_speed_10m
    };
  } catch (erro) {
    console.error("Erro ao buscar dados das ondas:", erro);
    return null;
  }
}