import styled from 'styled-components'

const Input = (props) => {
  const { children, fontSize, color, bold, background, margin, _onClick } =
    props
  const styles = { fontSize, color, bold, background, margin }
  return (
    <>
      <InputBox onClick={_onClick} {...styles}>
        {children}
      </InputBox>
    </>
  )
}

Input.defaultProps = {
  fontSize: '',
  color: '',
  background: '',
  margin: '',
  _onClick: () => {},
  bold: false,
}

const InputBox = styled.p`
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 5%;
  ${(props) => (props.bold ? 'font-weight: 700;' : 'font-weight: 400;')}
`

export default Input
