import styled from 'styled-components'
import { Text } from '.'

const Input = (props) => {
  const { children, label, multi, type, _onChange } = props
  if (multi) {
    return (
      <>
        {label && <Text bold>{label}</Text>}
        <MultiBox onChange={_onChange} type={type} rows={10}>
          {children}
        </MultiBox>
      </>
    )
  }
  return (
    <>
      {label && <Text bold>{label}</Text>}
      <InputBox type={type} onChange={_onChange}>
        {children}
      </InputBox>
    </>
  )
}

Input.defaultProps = {
  label: false,
  multi: false,
  type: 'text',
  _onChange: () => {},
}

const InputBox = styled.input`
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
`

const MultiBox = styled.textarea`
  border: 3px solid #000;
  width: 100%;
  padding: 20px 10px;
  resize: none;
  box-sizing: border-box;
`

export default Input
