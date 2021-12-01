/* eslint-disable no-loop-func */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { Grid, Text } from '../elements'
import { postActions } from '../redux/modules/post'

const useMakeDates = () => {
  const now = useSelector((state) => state.month.today)
  const date = useSelector((state) => state.month.curMonth)
  const post = useSelector((state) => state.post)
  const filter = useSelector((state) => state.post.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postActions.loadPostFB())
  }, [])

  const firstWeek = date.clone().startOf('month').week()
  const lastWeek =
    date.clone().endOf('month').week() === 1
      ? 53
      : date.clone().endOf('month').week()

  let result = []
  let week = firstWeek

  for (week; week <= lastWeek; week++) {
    result = result.concat(
      <Grid grid key={week}>
        {Array(7)
          .fill(0)
          .map((data, index) => {
            let days = date
              .clone()
              .startOf('year')
              .week(week)
              .startOf('week')
              .add(index, 'day')

            if (now.format('YYYYMMDD') === days.format('YYYYMMDD')) {
              return (
                <Grid
                  border
                  key={index}
                  background="black"
                  date={days.format('YYYY-MM-DD')}
                >
                  <Text color="white">{days.format('D')}</Text>
                  {post.list.map((el, i) => {
                    if (
                      el.post_date === days.format('YYYY-MM-DD') &&
                      filter === 'complete' &&
                      el.is_completed === true
                    ) {
                      return (
                        <Grid
                          margin="10px"
                          background="orange"
                          color="white"
                          key={el.id}
                          _onClick={() => {
                            dispatch(postActions.modalAction(el.id))
                            dispatch(postActions.loadOnePostFB(el.id))
                          }}
                        >
                          {el.post_title}
                          {el.is_show && <Modal id={el.id} />}
                        </Grid>
                      )
                    } else if (
                      el.post_date === days.format('YYYY-MM-DD') &&
                      filter === 'all'
                    ) {
                      return (
                        <Grid
                          margin="10px"
                          background="orange"
                          color="white"
                          key={el.id}
                          _onClick={() => {
                            dispatch(postActions.modalAction(el.id))
                            dispatch(postActions.loadOnePostFB(el.id))
                          }}
                        >
                          {el.post_title}
                          {el.is_show && <Modal id={el.id} />}
                        </Grid>
                      )
                    }
                  })}
                </Grid>
              )
            } else {
              return (
                <Grid border key={index} date={days.format('YYYY-MM-DD')}>
                  <Text>{days.format('D')}</Text>
                  {post.list.map((el, i) => {
                    if (
                      el.post_date === days.format('YYYY-MM-DD') &&
                      filter === 'complete' &&
                      el.is_completed === true
                    ) {
                      return (
                        <Grid
                          margin="10px"
                          background="#ddd"
                          key={el.id}
                          _onClick={() => {
                            dispatch(postActions.modalAction(el.id))
                            dispatch(postActions.loadOnePostFB(el.id))
                          }}
                        >
                          {el.post_title}
                          {el.is_show && <Modal id={el.id} />}
                        </Grid>
                      )
                    } else if (
                      el.post_date === days.format('YYYY-MM-DD') &&
                      filter === 'all'
                    ) {
                      return (
                        <Grid
                          margin="10px"
                          background="#ddd"
                          key={el.id}
                          _onClick={() => {
                            dispatch(postActions.modalAction(el.id))
                            dispatch(postActions.loadOnePostFB(el.id))
                          }}
                        >
                          {el.post_title}
                          {el.is_show && <Modal id={el.id} />}
                        </Grid>
                      )
                    }
                  })}
                </Grid>
              )
            }
          })}
      </Grid>
    )
  }
  return result
}

export default useMakeDates
