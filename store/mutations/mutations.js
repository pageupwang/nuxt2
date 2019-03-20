function addState(val) {
  window.sessionStorage.setItem('state', JSON.stringify(val))
}

import modal from './modal'

let mutation = {


}

export default Object.assign(mutation, modal)
