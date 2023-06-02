import ChatActions from '../Actions/ChatAction'

const chatState = {
  currentChat: null,
  currentChatMessage: [],
  mediaStream: null
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
    case ChatActions.FINISH_CALL_SUCCESS:
      newState = { ...state, mediaStream: null }
      break
    case ChatActions.FINISH_CALL_FAILED:
      newState = { ...state, mediaStream: null }
      break
    case ChatActions.START_CALL_SUCCESS:
      newState = { ...state, mediaStream: action.payload }
      break
    case ChatActions.START_CALL_FAILED:
      console.error('error on start call')
      newState = { ...state, mediaStream: null }
      break
    case ChatActions.ACTIVATE_RECENT_CHAT_SUCCESS:
      newState = {
        ...state,
        currentChat: action.payload.chat.currentChat,
        currentChatMessage: action.payload.chat.currentChatMessages
      }
      break
    case ChatActions.ACTIVATE_RECENT_CHAT_FAILED:
      newState = { ...state }
      break
    default:
      break
  }
  return newState
}

export default chat
