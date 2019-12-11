export default function (state = [], action) {
  switch (action.type) {
    case '@alerts/GET_SUCCESS':
      return action.alerts;
    default:
      return state;
  }
}
