import produce from 'immer'
import { createAction, handleActions } from 'redux-actions'
import { firestore } from '../../shared/firebase'

const initialState = {
  filter: 'all',
  list: [],
  current: {},
}

const LOAD_POST = 'LOAD_POST'
const ADD_POST = 'ADD_POST'
const MODAL_ACTION = 'MODAL_ACTION'
const CURRENT_POST = 'CURRENT_POST'
const COMPLETE_POST = 'COMPLETE_POST'
const DELETE_POST = 'DELETE_POST'
const FILTER_POST = 'FILTER_POST'

const loadPost = createAction(LOAD_POST, (post_list) => ({ post_list }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const currentPost = createAction(CURRENT_POST, (post) => ({ post }))
const modalAction = createAction(MODAL_ACTION, (id) => ({ id }))
const completePost = createAction(COMPLETE_POST, (id) => ({ id }))
const deletePost = createAction(DELETE_POST, (id) => ({ id }))
const filterPost = createAction(FILTER_POST)

const loadPostFB = () => {
  return function (dispatch, getState, { history }) {
    const calendarDB = firestore.collection('calendar')

    calendarDB.get().then((docs) => {
      let temp = []
      docs.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data(), is_show: false })
      })
      dispatch(loadPost(temp))
    })
  }
}

const loadOnePostFB = (id) => {
  return function (dispatch, getState, { history }) {
    const calendarDB = firestore.collection('calendar')

    calendarDB
      .doc(id)
      .get()
      .then((doc) => {
        dispatch(currentPost({ id: doc.id, ...doc.data() }))
      })
  }
}

const addPostFB = (post) => {
  return function (dispatch, getState, { history }) {
    const calendarDB = firestore.collection('calendar')
    calendarDB
      .add({ ...post, is_completed: false, is_show: false })
      .then((doc) => {
        let _post = { id: doc.id, ...post, is_completed: false, is_show: false }
        console.log(_post)
        dispatch(addPost(_post))
        history.push('/')
      })
  }
}

const completPostFB = (id) => {
  return function (dispatch, getState, { history }) {
    const calendarDB = firestore.collection('calendar')
    const docRef = calendarDB.doc(id)
    docRef
      .update({
        is_completed: true,
      })
      .then((doc) => {
        dispatch(completePost(id))
      })
  }
}

const deletePostFB = (id) => {
  return function (dispatch, getState, { history }) {
    const calendarDB = firestore.collection('calendar')
    const docRef = calendarDB.doc(id)
    docRef.delete().then(() => {
      dispatch(deletePost(id))
    })
  }
}

export default handleActions(
  {
    [LOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.push(...action.payload.post_list)
        draft.list = [...action.payload.post_list]
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload)
        draft.list.push(action.payload.post)
      }),
    [MODAL_ACTION]: (state, action) =>
      produce(state, (draft) => {
        draft.list.forEach((el) =>
          el.id === action.payload.id ? (el.is_show = !el.is_show) : el
        )
      }),
    [CURRENT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.current = action.payload.post
      }),
    [COMPLETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.map((el) =>
          el.id === action.payload.id ? (el.is_completed = true) : el
        )
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((el) => el.id !== action.payload.id)
        draft.current = {}
      }),
    [FILTER_POST]: (state, action) =>
      produce(state, (draft) => {
        if (draft.filter === 'all') {
          draft.filter = 'complete'
        } else if (draft.filter === 'complete') {
          draft.filter = 'all'
        }
      }),
  },
  initialState
)

const postActions = {
  loadPost,
  loadPostFB,
  addPostFB,
  modalAction,
  loadOnePostFB,
  completPostFB,
  deletePostFB,
  filterPost,
}

export { postActions }
