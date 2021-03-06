import * as types from "../actions/actionsTypes";
import initialState from "./initialState";
function actionTypeEndsInSuccess(
  type
) {
  return (
    type.substring(
      type.length - 8
    ) === "_SUCCESS"
  );
}

export default function appCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (
    action.type ==
    types.BEGIN_API_CALL
  ) {
    return state + 1;
  } else if (
    action.type ===
      types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(
      action.type
    )
  ) {
    return state - 1;
  }
  return state;
}
