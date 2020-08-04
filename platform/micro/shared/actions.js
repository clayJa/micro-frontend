import { initGlobalState } from 'qiankun'

const initialState = {
  token: '',
  ignore: '',
  user: {
    name: ''
  }
}
const actions = initGlobalState(initialState)

export default actions
