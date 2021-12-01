import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Grid } from '../elements'
import { history } from '../redux/configureStore'
import { dateActions } from '../redux/modules/month'
import { postActions } from '../redux/modules/post'

const CalendarHeader = (props) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.month.curMonth)
  const curDate = state.clone()
  const viewMonth = curDate.format('YYYY-MM')
  const filter = useSelector((state) => state.post.filter)

  return (
    <>
      <Grid side_flex>
        <Grid flex padding="20px">
          <Grid
            padding="20px"
            _onClick={() => {
              dispatch(dateActions.changeMonth(curDate.add(-1, 'months')))
            }}
          >
            -
          </Grid>
          {viewMonth}
          <Grid
            padding="20px"
            _onClick={() => {
              dispatch(dateActions.changeMonth(curDate.add(1, 'months')))
            }}
          >
            +
          </Grid>
        </Grid>
        <Grid padding="20px">
          <Grid border padding="10px" _onClick={() => history.push('/add')}>
            + 일정 추가하기
          </Grid>
          {filter === 'all' ? (
            <Grid
              border
              padding="10px"
              margin="10px 0px"
              _onClick={() => dispatch(postActions.filterPost())}
            >
              완료된 일정 보기
            </Grid>
          ) : (
            <Grid
              border
              padding="10px"
              margin="10px 0px"
              _onClick={() => dispatch(postActions.filterPost())}
            >
              모든 일정 보기
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default CalendarHeader
