const Register = () => {
  return (
    <div class="sign">
      <div class="container">
        <div class="item">
          <form>
            <h2>Sign Up</h2>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="نام کاربری" required autofocus />
              <button class="btn prepend">
                <i data-eva="person"></i>
              </button>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="آدرس ایمیل" required />
              <button class="btn prepend">
                <i data-eva="email"></i>
              </button>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="رمزعبور" required />
              <button class="btn prepend">
                <i data-eva="lock"></i>
              </button>
            </div>
            <button type="submit" class="btn primary">
              ثبت نام
            </button>
            <span>
              آیا قبلا ثبت نام کردی? <a href="#/">ورود.</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
