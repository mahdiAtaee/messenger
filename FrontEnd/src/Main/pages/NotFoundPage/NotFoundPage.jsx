import NotFound from '../../../Assets/img/404.jpg'
import Sidebar from '../../components/Sidebar'
const NotFoundPage = () => {
  return (
    <>
      <img src={NotFound} alt="404" className="img-responsive not-found" />
    </>
  )
}

export default NotFoundPage
