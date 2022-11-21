export const requestData = async (searchQuery) => {
  const baseUrl = 'https://nominatim.openstreetmap.org/?q=';
  const dataFormat = 'json';
  return await fetch(baseUrl + searchQuery + '&format=' + dataFormat);
};
