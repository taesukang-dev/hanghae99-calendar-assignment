import produce from 'immer'
import moment from 'moment'
import { createAction, handleActions } from 'redux-actions'

const initialState = {
  today: moment(),
  curMonth: moment(),
}

const CHANGE_MONTH = 'CHANGE_MONTH'
const changeMonth = createAction(CHANGE_MONTH, (month) => ({ month }))

export default handleActions(
  {
    [CHANGE_MONTH]: (state, action) =>
      produce(state, (draft) => {
        draft.curMonth = action.payload.month
      }),
  },
  initialState
)

const dateActions = {
  changeMonth,
}

export { dateActions }
