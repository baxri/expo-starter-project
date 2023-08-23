import { Store as StoreType } from 'Services/Store';

enum Service {
  Store,
  QueryClient,
}

const services = new Map<Service, any>();

function setStore(store: StoreType) {
  services.set(Service.Store, store);
}

function getStore(): StoreType {
  return services.get(Service.Store);
}

export default {
  setStore,
  getStore,
};
