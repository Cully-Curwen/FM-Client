function Authorization() {
  return {
    CustomerAuthorization: localStorage.CustomerAuthorization, 
    TraderAdminAuthorization: localStorage.TraderAdminAuthorization,
    MarketAdminAuthorization: localStorage.MarketAdminAuthorization,
  };
};

export default Authorization;