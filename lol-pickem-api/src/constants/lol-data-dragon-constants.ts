const baseUrl = 'http://ddragon.leagueoflegends.com/cdn/';
const version = '10.1.1';
const compiledBaseUrl = `${baseUrl}${version}`;
export const LolDataDragonConstants = {
  baseUrl: `${compiledBaseUrl}`,
  splashImageUr: `${compiledBaseUrl}/img/champion/splash/`,
  loadingImageUrl: `${compiledBaseUrl}/img/champion/loading/`,
  squareImageUrl: `${compiledBaseUrl}/img/champion/`,
  passiveImageUrl: `${compiledBaseUrl}/img/passive/`,
};
