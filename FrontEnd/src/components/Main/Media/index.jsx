// -------------- import components ----------------
import Video from './Video'
import Audio from './Audio'

function index({mediaStream}) {
    if (mediaStream.type==='full'||mediaStream.type==='video') {
        return <Video stream={mediaStream.stream} />;
    }
    return <Audio stream={mediaStream.stream} />;
}

export default index