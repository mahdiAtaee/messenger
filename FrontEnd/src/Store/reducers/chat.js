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
    case ChatActions.SEND_MESSAGE_SUCCESS:
      newState = {
        ...state,
        currentChatMessage: [...state.currentChatMessage, { ...action.payload }]
      }
      break
    case ChatActions.SEND_MESSAGE_FAILED:
      newState = { ...state }
      break
    case ChatActions.SAVE_MESSAGE_SUCCESS:
      newState = {
        ...state,
        currentChatMessage: [...state.currentChatMessage, { ...action.payload }]
      }
      break
    case ChatActions.SAVE_MESSAGE_FAILED:
      newState = { ...state }
      break
    case ChatActions.FINISH_CHAT_SUCCESS:
      newState = { ...state, currentChat: null, currentChatMessages: [] }
      break
    case ChatActions.FINISH_CHAT_FAILED:
    default:
      break
  }
  return newState
}

export default chat
