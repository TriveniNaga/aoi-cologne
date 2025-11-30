// src/utils/geocode.ts

export async function geocodeCity(cityName: string): Promise<[number, number] | null> {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`);
  const results = await response.json();
  if (results.length > 0) {
    const { lat, lon } = results[0];
    return [parseFloat(lon), parseFloat(lat)];
  }
  return null;
}
