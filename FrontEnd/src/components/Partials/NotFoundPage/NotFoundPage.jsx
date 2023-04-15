import NotFound from '../../../Assets/img/404(2).jpg'
import DarkNotFound from '../../../Assets/img/404(2)_dark.jpg'
import { useDarkModeContext } from '../../../context/DarkModeContext'

const NotFoundPage = () => {
  const { dark } = useDarkModeContext()
  return (
    <>
      {dark ? (
        <img src={DarkNotFound} alt="404" className="img-responsive not-found" />
      ) : (
        <img src={NotFound} alt="404" className="img-responsive not-found" />
      )}
    </>
  )
}

export default NotFoundPage
