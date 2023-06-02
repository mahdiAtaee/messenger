// -------------------- imports dependencies --------------------
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  useDarkModeContext,
  useDarkModeDispatch,
  actionTypes
} from '../../../context/DarkModeContext'
import { connect } from 'react-redux'

const Settings = ({ me }) => {
  const { dark } = useDarkModeContext()
  const dispatch = useDarkModeDispatch()
  const handleChangeDark = () => {
    if (!dark) {
      dispatch({
        type: actionTypes.DARK_MODE
      })
      return
    }
    dispatch({
      type: actionTypes.LIGHT_MODE
    })
  }
  const firstName = me.name.split(" ")[0]
  const lastName = me.name.split(" ")[1]
  return (
    <div className={dark ? 'settings-wrapper dark' : 'settings-wrapper'}>
      <div className="header">
        <div className="page-title">تنظیمـــــات</div>
      </div>
      <div className="contact">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="title">حساب کاربری</span>
              <span className="describe-title">بروزرسانی پروفایل</span>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="user-account">
                <Row>
                  <Col lg={6} className="input-wrapper">
                    <input type="text" id="firstName" placeholder=" " value={firstName} />
                    <label htmlFor="firstName">نام</label>
                  </Col>
                  <Col lg={6} className="input-wrapper">
                    <input type="text" id="lastName" placeholder=" " value={lastName} />
                    <label htmlFor="lastName">نام خانوادگی</label>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <input type="email" id="email" placeholder=" " value={me.email} />
                    <label htmlFor="email">ایمیل</label>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <input type="password" id="password" placeholder=" " value={me.hash} />
                    <label htmlFor="password">رمزعبور</label>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="title">امنیت و حریم خصوصی</span>
              <span className="describe-title">مدیریت حریم خصوصی</span>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="user-privacy">
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">حالت امن</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید که کسی آنلاین بودن شما را مشاهده کند یا خیر
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="safe_mode" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">تاریخچه امن</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید تاریخچه ها تا چه زمانی در دسترس باشد
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="safe_history" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">دسترسی به دوربین</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید که مرورگر به دوربین دسترسی داشته باشد یا خیر
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="access-camera" checked="true" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">دسترسی به میکروفون</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید که مرورگر به میکروفون دسترسی داشته باشد یا خیر
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="access_microphone" checked="true" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="title">اعلانات</span>
              <span className="describe-title">روشن یا خاموش کردن اعلانات</span>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="notification">
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">pop-up</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید که اعلانات به صورت پنجره باز شو نمایش داده شود یا خیر
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="pop-up" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">صدا</span>
                      <span className="privacy-desc">
                        میتوانید فعال بودن و غیرفعال بودن صدا را تنظیم کنید
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input type="checkbox" id="on-off-sound" checked="true" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="title">ظاهر برنامه</span>
              <span className="describe-title">سفارشی سازی ظاهر برنامه</span>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="theme">
                <Row>
                  <Col className="input-wrapper">
                    <div className="privacy-text">
                      <span className="privacy-title">حالت شب</span>
                      <span className="privacy-desc">
                        میتوانید تنظیم کنید که برنامه به چه حالت نمایش داده شود
                      </span>
                    </div>
                    <div className="checkbox-wrapper">
                      <label className="switch">
                        <input
                          type="checkbox"
                          id="dark-mode"
                          checked={dark}
                          onClick={() => handleChangeDark()}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default connect((state) => ({
  me: state.main.me
}))(Settings)
