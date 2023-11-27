export const fakeOrderProvider = {
  createAddress(data) {
    return new Promise((resolve, reject) => {
      for(var key in data) {
        if(!data[key]) {
          reject(new Error('Please provide address'));
        }
      }

      setTimeout(() => resolve(data), 200);
    });
  },

  placeOrder(data) {
    return new Promise((resolve, reject) => {
      if(!data) {
        reject(new Error('Can not order product'));
      }

      setTimeout(() => resolve(data), 200);
    });
  }
};