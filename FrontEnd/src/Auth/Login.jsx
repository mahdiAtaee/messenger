import Person from '../Assets/img/user_dark.png'
import Lock from '../Assets/img/lock.png'

import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data) => window.location.replace('/messenger/chat')
  return (
    <div className="sign">
      <div className="container">
        <div className="item">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>ورود</h2>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  className={errors.username ? 'form-control has-error' : 'form-control success'}
                  placeholder="نام کاربری"
                  name="username"
                  autoFocus
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
              آیا عضو نیستی? <a href="/auth/register">ثبت نام</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
