import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router'
import Add from '../pages/Add'
import CalendarEX from '../pages/CalendarEX'
import { history } from '../redux/configureStore'
import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={CalendarEX} />
        <Route exact path="/add" component={Add} />
      </ConnectedRouter>
    </div>
  )
}

export default App
