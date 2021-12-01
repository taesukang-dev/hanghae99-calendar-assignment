import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, Input, Text } from '../elements'
import { postActions } from '../redux/modules/post'

const Add = (props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [contents, setContents] = useState('')
  return (
    <>
      <Grid column flex height="100vh">
        <Grid margin="20px">
          <Text bold fontSize="32px">
            일정을 추가하쇼!
          </Text>
        </Grid>
        <Grid margin="20px" width="80%">
          <Input
            label="일정 제목!"
            _onChange={(e) => {
              setTitle(e.target.value)
            }}
          ></Input>
        </Grid>
        <Grid margin="20px" width="80%">
          <Input
            type="date"
            label="일자!"
            _onChange={(e) => {
              setDate(e.target.value)
            }}
          ></Input>
        </Grid>
        <Grid margin="20px" width="80%">
          <Input
            multi
            label="메모"
            _onChange={(e) => {
              setContents(e.target.value)
            }}
          ></Input>
        </Grid>
        <Button
          padding="20px"
          width="80%"
          _onClick={() =>
            dispatch(
              postActions.addPostFB({
                post_contents: contents,
                post_date: date,
                post_title: title,
              })
            )
          }
        >
          일정 추가하기
        </Button>
      </Grid>
    </>
  )
}

export default Add
