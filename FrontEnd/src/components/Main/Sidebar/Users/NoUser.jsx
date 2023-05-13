import Online from '../../../../Assets/img/online.png'
const NoUser = () => {
  return (
    <div className="container">
      <img src={Online} alt="Online user" style={{ width: '100%' }} />
      <p style={{ textAlign: 'center' }}>کاربر آنلاینی پیدا نشد!</p>
    </div>
  )
}

export default NoUser
