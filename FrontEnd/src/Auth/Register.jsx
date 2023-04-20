import Person from '../Assets/img/user_dark.png'
import Lock from '../Assets/img/lock.png'
import Email from '../Assets/img/email.png'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import userActions from '../Store/Actions/UsersAction'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const Register = ({ registerUser, message, success }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data) => {
    registerUser({
      full_name: data.username,
      email: data.email,
      password: data.password
    })
  }

  const history = useHistory()

  useEffect(() => {
    let redirect
    if (success === true) {
      redirect = setTimeout(() => {
        history.push('/auth/login')
      }, 2000)
    }
    return () => {
      clearTimeout(redirect)
    }
  }, [success, history])

  const showMessage = (
    <div className="row">
      <div className="col">
        <div
          className={
            success === true
              ? 'alert alert-success alert-dismissible fade show'
              : 'alert alert-danger alert-dismissible fade show'
          }
          role="alert">
          <div className="loading">
            <div className="loader-sm"></div>
          </div>
          {message}
          {success === true ? <div>در حال انتقال به صفحه ورود هستید</div> : ''}
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
    <div className="sign">
      <div className="container">
        {success && showMessage}
        <div className="item">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>ثبت نام</h2>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="username"
                  id="userName"
                  className={errors.username ? 'form-control has-error' : 'form-control success'}
                  placeholder="نام کاربری"
                  autoFocus
                  aria-invalid={errors.username ? 'true' : 'false'}
                  {...register('username', {
                    required: 'نام کاربری اجباری است',
                    maxLength: {
                      value: 20,
                      message: 'حداکثر 20 کاراکتر مجاز میباشد'
                    },
                    minLength: {
                      value: 3,
                      message: 'حداقل 3 کاراکتر باید وارد شود'
                    }
                  })}
                />
                <button className="btn prepend">
                  <img src={Person} alt="person" />
                </button>
              </div>
              {errors.username && <p className="error-message">{errors.username.message}</p>}
            </div>
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
                  name="password"
                  id="userPassword"
                  className={errors.password ? 'form-control has-error' : 'form-control success'}
                  placeholder="رمزعبور"
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
            <button type="submit" className="register-button">
              ثبت نام
            </button>
            <span>
              آیا قبلا ثبت نام کردی? <Link to="/auth/login">ورود.</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (state) => {
    return {
      success: state.users.success,
      message: state.users.message
    }
  },
  (dispatch) => {
    return {
      registerUser: (payload) => {
        dispatch({
          type: userActions.USER_REGISTER,
          payload
        })
      }
    }
  }
)(Register)
