import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, Grid, Text } from '../elements'
import { postActions } from '../redux/modules/post'

const Modal = (props) => {
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post.current)
  return (
    <>
      <ModalBox></ModalBox>
      <DetailBox>
        <Grid background="black" width="50vw" height="50vh" padding="16px">
          <DetailHeader>
            <Button
              _onClick={() => dispatch(postActions.completPostFB(post.id))}
            >
              완료
            </Button>
            <Button
              margin="0px 0px 0px 10px"
              _onClick={() => dispatch(postActions.deletePostFB(post.id))}
            >
              삭제
            </Button>
          </DetailHeader>
          <Grid>
            <Text fontSize="32px" color="white">
              {post.is_completed ? '완료' : '미완료'}
            </Text>
            <Text margin="10px 0px" color="white">
              {post.post_title}
            </Text>
          </Grid>
          <Grid>
            <Text margin="20px 0px" fontSize="32px" color="white">
              날짜
            </Text>
            <Text margin="10px 0px" color="white">
              {post.post_date}
            </Text>
          </Grid>
          <Grid>
            <Text margin="20px 0px" fontSize="32px" color="white">
              메모
            </Text>
            <Text margin="10px 0px" color="white">
              {post.post_contents}
            </Text>
          </Grid>
        </Grid>
      </DetailBox>
    </>
  )
}

const ModalBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  opacity: 0.5;
  background-color: #ddd;
`

const DetailBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DetailHeader = styled.div`
  position: absolute;
  right: 30%;
`

export default Modal
