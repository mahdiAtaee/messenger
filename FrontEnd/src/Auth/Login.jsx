import Email from '../Assets/img/email.png'
import Lock from '../Assets/img/lock.png'

import { useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import UsersAction from '../Store/Actions/UsersAction'

const Login = ({ doLogin, success, message, isUserLoggedIn }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data) => {
    doLogin({
      email: data.email,
      password: data.password
    })
  }

  const showMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"></button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {isUserLoggedIn === true && <Redirect to="/messenger/chat" />}
      <div className="sign">
        <div className="container">
          {success === false && showMessage}
          <div className="item">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>ورود</h2>
              <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  className={errors.email ? 'form-control has-error' : 'form-control success'}
                  placeholder="آدرس ایمیل"
                  {...register('email', {
                    required: 'ایمیل اجباری است',
                    minLength: {
                      value: 8,
                      message: 'حداقل 8 کاراکتر باید وارد شود'
                    },
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'لطفا یک ایمیل معتبر وارد کنید'
                    }
                  })}
                />
                <button className="btn prepend">
                  <img src={Email} alt="envelope" />
                </button>
              </div>
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="password"
                    className={errors.password ? 'form-control has-error' : 'form-control success'}
                    placeholder="رمزعبور"
                    name="password"
                    {...register('password', {
                      required: 'رمزعبور اجباری است',
                      maxLength: {
                        value: 20,
                        message: 'حداکثر 20 کاراکتر مجاز میباشد'
                      },
                      minLength: {
                        value: 8,
                        message: 'حداقل 8 کاراکتر باید وارد شود'
                      }
                    })}
                  />
                  <button className="btn prepend">
                    <img src={Lock} alt="lock" />
                  </button>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </div>
              <button type="submit" className="login-button">
                ورود
              </button>
              <a href="#/" className="remember-password">
                فراموشی رمزعبور؟
              </a>
              <span>
                آیا عضو نیستی? <Link to="/auth/register">ثبت نام</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(
  (state) => {
    return {
      success: state.users.success,
      message: state.users.message,
      isUserLoggedIn: state.users.isUserLoggedIn
    }
  },
  (dispatch) => {
    return {
      doLogin: (payload) => dispatch({ type: UsersAction.USER_LOGIN, payload })
    }
  }
)(Login)
