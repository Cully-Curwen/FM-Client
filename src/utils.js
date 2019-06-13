export const CustomerAuthorization = () => {
  const token = localStorage.CustomerAuthorization;
  return token ? 'Bearer ' + token : '';
};
export const TraderAdminAuthorization = () => {
  const token = localStorage.TraderAdminAuthorization;
  return token ? 'Bearer ' + token : '';
};
export const MarketAdminAuthorization = () => {
  const token = localStorage.MarketAdminAuthorization;
  return token ? 'Bearer ' + token : '';
};