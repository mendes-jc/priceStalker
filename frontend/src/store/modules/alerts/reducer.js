export default function (state = [], action) {
  switch (action.type) {
    case '@alerts/GET_SUCCESS':
      const { alerts } = action;
      return alerts ? alerts : state;
    default:
      return state;
  }
}
