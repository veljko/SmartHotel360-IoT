export const environment = {
  production: true,
  version: 'Production',
  sensorDataTimer: 5000,
  adalConfig: {
    tenant: '{tenantId}',
    clientId: '{clientId}',
    endpoints: {
      '{apiUri}': '{clientId}'
    }
  } as adal.Config,
  apiEndpoint: '{apiEndpoint}',
  resourceId: '0b07f429-9f4b-4714-9392-cc5e8e80c8b0',
  azureMapsKey: '{azureMapsKey}',
  useBasicAuth: false,
  tsiFqdn: '{tsiFqdn}',
  tsiApi: '{tsiApi}',
  tsiHowManyDays: '{tsiHowManyDays}'
};
