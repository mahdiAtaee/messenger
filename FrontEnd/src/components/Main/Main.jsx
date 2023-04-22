import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction'
const Main = ({ children }) => {
  return <div className="main">{children}</div>
}

export default connect(
  (state) => {
    return {
      isInit: state.main.isInit
    }
  },
  (dispatch) => {
    return {
      init: () => {
        dispatch({ type: MainAction.INIT_REQUESTED, payload: null })
      }
    }
  }
)(Main)
