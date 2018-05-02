import idbKeyVal from 'idb-keyval';

var idb = function idb(store) {
    return {
        load() {
            return idbKeyVal.get(store);
        },

        save(state) {
            return idbKeyVal.set(store, state);
        }
    };
};

export default idb;
