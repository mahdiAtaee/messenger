// -------------- import components ----------------
import Video from './Video'
import Audio from './Audio'
import ChatContent from '../Chat/ChatContent'

// ------------- import dependencies -----------------
import { connect } from 'react-redux'

function index({ mediaStream }) {
  if (mediaStream !== null) {
    if (mediaStream.type === 'full' || mediaStream.type === 'video') {
      return <Video stream={mediaStream.stream} />
    }
    return <Audio stream={mediaStream.stream} />
  }else{
    return <ChatContent />
  }
}

export default connect((state) => ({
  mediaStream: state.chat.mediaStream
}))(index)
