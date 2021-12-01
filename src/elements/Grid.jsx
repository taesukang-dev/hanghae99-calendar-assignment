import styled from 'styled-components'

const Grid = (props) => {
  const {
    children,
    margin,
    padding,
    width,
    flex,
    grid,
    background,
    _onClick,
    th,
    side_flex,
    border,
    height,
    column,
    position,
  } = props
  const styles = {
    margin,
    padding,
    width,
    flex,
    grid,
    background,
    th,
    side_flex,
    border,
    height,
    column,
    position,
  }
  return (
    <>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </>
  )
}

Grid.defaultProps = {
  th: false,
  margin: '',
  padding: '',
  width: '',
  flex: false,
  background: '',
  grid: false,
  side_flex: false,
  border: false,
  height: '',
  column: false,
  position: '',
  _onClick: () => {},
}

const GridBox = styled.div`
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  ${(props) =>
    props.flex
      ? 'display: flex; align-items: center; justify-content: center'
      : ''};
  ${(props) =>
    props.side_flex
      ? 'display: flex; align-items: center; justify-content: space-between'
      : ''};
  ${(props) =>
    props.grid
      ? 'display: grid; grid-template-columns: repeat(7, calc(14.2857%)); height:13vh;'
      : ''};
  ${(props) => (props.column ? 'flex-direction: column;' : '')};
  ${(props) => (props.th ? 'height:5vh; ' : '')};
  box-sizing: border-box;
  /* text-align: center; */
  ${(props) => (props.border ? 'border: 1px solid black;' : '')}
  overflow: hidden;
`

export default Grid
