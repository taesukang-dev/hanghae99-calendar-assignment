import styled from 'styled-components'

const Button = (props) => {
  const { children, width, padding, _onClick, margin } = props
  const styles = { width, padding, margin }
  return (
    <>
      <ButtonBox onClick={_onClick} {...styles}>
        {children}
      </ButtonBox>
    </>
  )
}

Button.defaultProps = {
  margin: '',
  width: '',
  padding: '',
  background: '',
  padding: '',
  _onClick: () => {},
}

const ButtonBox = styled.button`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: #aaa;
  color: #fff;
`

export default Button
