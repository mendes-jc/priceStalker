export function getAlertsRequest(email) {
  return {
    type: '@alerts/GET_REQUEST',
    email,
  };
}

export function getAlertsSuccess(alerts) {
  return {
    type: '@alerts/GET_SUCCESS',
    alerts,
  };
}

export function setAlertRequest(id, data) {
  return {
    type: '@alerts/SET_REQUEST',
    id,
    data,
  };
}

export function removeAlertRequest(id) {
  return {
    type: '@alerts/REMOVE_REQUEST',
    id,
  };
}

export function createAlertRequest(email) {
  return {
    type: '@alerts/CREATE_REQUEST',
    email,
  };
}
