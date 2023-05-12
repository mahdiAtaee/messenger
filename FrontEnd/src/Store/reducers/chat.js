import ChatActions from '../Actions/ChatAction'

const chatState = {
  currentChat: null,
  currentChatMessage: []
}

const chat = (state = chatState, action) => {
  let newState = state
  switch (action.type) {
    case ChatActions.NEW_CHAT_SUCCESS:
      newState = { ...state, currentChat: action.payload }
      break
    case ChatActions.NEW_CHAT_FAILED:
      newState = { ...state, currentChat: null }
      break
    default:
      break
  }
  return newState
}

export default chat
