/* eslint-disable */

const mockApiWrapper = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    if ((data.status && data.status % 100 === 2) || data.status == null) {
      resolve(data);
    } else {
      reject(Error({
        response: {
          status: data.status,
          data,
        },
      }));
    }
  }, 2000);
});

export const MOCK_API = {
  auth: {
    // Login
    login: credentials => mockApiWrapper({
      msg: 'LOGIN_SUCCESSFUL',
      token: 'SUPER_TOKEN',
    }),
  },
};
