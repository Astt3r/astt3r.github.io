// CounterAPI Configuration
// Las operaciones de incremento/lectura son públicas y no requieren autenticación
export const COUNTERAPI_CONFIG = {
  namespace: process.env.REACT_APP_COUNTERAPI_NAMESPACE || 'ast3r',
  counterKey: process.env.REACT_APP_COUNTERAPI_KEY || 'visitas-github-astor'
};

export const getCounterApiUrl = (action = '') => {
  const { namespace, counterKey } = COUNTERAPI_CONFIG;
  const baseUrl = `https://api.counterapi.dev/v2/${namespace}/${counterKey}`;
  return action ? `${baseUrl}/${action}` : baseUrl;
};
