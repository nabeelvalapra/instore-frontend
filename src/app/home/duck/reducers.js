import types from './types';


const storeInitialState = {
  isFetching: false,
  data: undefined,
  error: undefined
}

export const store = (state=storeInitialState, action) => {

  switch (action.type) {

    case types.FETCH_STORE_DETAIL_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.FETCH_STORE_DETAIL_SUCCESS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          data: {
            "name": json.name,
            "email": json.email,
            "style": {
              "logo": json.style.logo,
              "themeColor": json.style.theme_color,
              "accentColor": json.style.accent_color
            },
            "tags": json.tags
          }
      })

      case types.FETCH_STORE_DETAIL_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.errorMsg
        })

    default:
      return state
  }
}


const spotlightInitialState = {
  isFetching: false,
  images: undefined,
  error: undefined
}
export const spotlight = (state=spotlightInitialState, action) => {

  switch (action.type) {

    case types.FETCH_STORE_SPOTLIGHT_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.FETCH_STORE_SPOTLIGHT_SUCCESS:
      return Object.assign({}, state, {
          isFetching: false,
          images: action.json
        })

      case types.FETCH_STORE_DETAIL_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.errorMsg
        })

    default:
      return state
  }
}

export const selectedTag = (state = "popular", action) => {
  if(action.tag){
    return action.tag
  }
  return state
}
