import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Login = () => {

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
              <img src="assets/images/logo.png" alt="hyper" height={50} className="mb-3" />
              <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
              <span className="text-600 font-medium line-height-3">Don't have an account?</span>
          </div>

          <div>
              <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
              <InputText id="email" type="text" className="w-full mb-3" />

              <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
              <InputText id="password" type="password" className="w-full mb-3" />

              <Button label="Sign In" icon="pi pi-user" className="w-full" />
          </div>
      </div>
  </div>
  );
}

export default Login;