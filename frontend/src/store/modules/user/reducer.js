import produce from 'immer';

export default function (state = {}, action) {
  switch (action.type) {
    case '@user/GET_SUCCESS':
      return produce(state, (draft) => {
        const { email, name, firstAccess } = action.user;
        draft.email = email;
        draft.name = name;
        draft.firstAccess = firstAccess;
      });
    default:
      return state;
  }
}
