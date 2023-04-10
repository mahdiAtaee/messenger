
const Login = () => {
  return (
    <div class="sign">
      <div class="container">
        <div class="item">
          <form>
            <h2>ورود</h2>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Username" required autofocus />
              <button class="btn prepend">
                <i data-eva="person"></i>
              </button>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" required />
              <button class="btn prepend">
                <i data-eva="lock"></i>
              </button>
            </div>
            <a href="#/">فراموشی رمزعبور؟</a>
            <button type="submit" class="btn primary">
              ورود
            </button>
            <span>
              آیا عضو نیستی? <a href="#/">ایجاد ثبت نام</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
