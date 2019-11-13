import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


export default (context) => {
  createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })(context.store);
};
