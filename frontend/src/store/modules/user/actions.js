export function getUserRequest(email) {
  return {
    type: '@user/GET_REQUEST',
    email,
  };
}

export function getUserSuccess(user) {
  return {
    type: '@user/GET_SUCCESS',
    user,
  };
}

export function newUserRequest(user) {
  return {
    type: '@user/NEW_REQUEST',
    user,
  };
}

export function newUserSuccess(user) {
  return {
    type: '@user/NEW_SUCCES',
    user,
  };
}
