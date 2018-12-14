import constant from '../constants'
const initialState = {
    rates:{},
}

export default function currencyReducer(currentState, { type, payload }) {
  const state = currentState || initialState;
  switch (type) {

    case constant.SET_RATES:
        return Object.assign({}, state, {
            rates : payload
        });

        default:
        return state;
    }
  }
  
