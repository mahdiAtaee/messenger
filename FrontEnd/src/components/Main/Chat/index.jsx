// ------------------ import dependencies ------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { useShowChatBoxContext } from '../../../context/ShowChatContext'

// ------------------ import components ------------------
import ActiveChat from './ActiveChat'

const Index = () => {
  const { dark } = useDarkModeContext()
  const { showChatBox } = useShowChatBoxContext()
  const isShow = showChatBox === false ? 'none' : 'block'

  console.log(isShow, dark)
  return (
    <div
      className={dark === true ? 'tab-content chat-box dark' : 'tab-content chat-box'}
      id="myTabContent">
      <div className="tab-pane active show" id="user-one" role="tabpanel" aria-labelledby="user-one-tab">
        <ActiveChat />
      </div>
    </div>
  )
}

export default Index
