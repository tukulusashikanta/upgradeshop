export const fakeAuthProvider = {
  async signin(user) {
    return new Promise((resolve, reject) => {
      if (!user) {
        reject(new Error('Not all information provided'));
      }
    
      setTimeout(() => resolve({
        'user-details': {
          username: 'test_username',
          first_name: 'test_firstname',
          last_name: 'test_lastname',
          mobile: '+84935533304'
        },
        token: '_fake-token'
      }), 200);
    });
  },
  
  async signout() {
    return new Promise((resolve, reject) => {
      resolve(true);
    })
  },
};

export const fakeSignUpProvider = {
  createUser(data) {
    return new Promise((resolve, reject) => {
      if (!data.first_name || !data.last_name || !data.email_address || !data.password) {
        reject(new Error('Not all information provided'));
      }
    
      setTimeout(() => resolve(data), 200);
    });
  }
};