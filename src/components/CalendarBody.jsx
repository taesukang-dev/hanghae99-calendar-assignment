import { Grid, Text } from '../elements'
import useMakeDates from '../hooks/useMakeDates'

const CalendarBody = () => {
  const dateArr = ['일', '월', '화', '수', '목', '금', '토']
  const dates = useMakeDates()

  return (
    <>
      <Grid>
        <Grid grid th>
          {dateArr.map((el, i) => {
            return (
              <Grid th border flex key={i}>
                <Text>{el}</Text>
              </Grid>
            )
          })}
        </Grid>
        <Grid>{dates}</Grid>
      </Grid>
    </>
  )
}

export default CalendarBody
