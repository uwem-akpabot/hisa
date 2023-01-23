
const LoginPage = () => {
  return (
    <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Login</h1>
							<p className="lead">
								Sign in to your account to continue
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<div className="text-center">
										<img src="img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
									</div>
									<form>
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
										</div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
											<small>
            <a href="index.html">Forgot password?</a>
          </small>
										</div>
										<div>
											<label className="form-check">
            <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
            <span className="form-check-label">
              Remember me next time
            </span>
          </label>
										</div>
										<div className="text-center mt-3">
											<a href="/" className="btn btn-lg btn-primary">Sign in</a>
											{/* <button type="submit" className="btn btn-lg btn-primary">Sign in</button>  */}
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>
  )
}

export default LoginPage
