import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import auth from './config'; // Ensure that the path to your config file is correct

function UserAuthenticationPage() {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    user: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    user: '',
    email: '',
    password: '',
  });

  const { email, password, user } = data;

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation (at least 6 characters)
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update state
    setData({ ...data, [name]: value });

    // Perform validation
    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email address' });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(value) ? '' : 'Password must be at least 6 characters' });
    } else if (name === 'user') {
      setErrors({ ...errors, user: value.trim() ? '' : 'User name is required' });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (validateEmail(email) && validatePassword(password) && user.trim()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log({ user });
          navigate('/home', { state: { userData: user } });
        })
        .catch((error) => console.error('Error creating user:', error));
    } else {
      console.log('Form validation failed.');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (validateEmail(email) && validatePassword(password)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log({ user });
          navigate('/home');
        })
        .catch((error) => {
          console.error('Error signing in:', error)
          alert('User Not Found')
        });
    } else {
      console.log('Form validation failed.');
      alert('Please Fill the Feilds')
    }
  };

  const handleGoogleAccount = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider(auth))
      .then((result) => {
        const user = result.user;
        console.log({ user });
        navigate('/home', { state: { userData: user } });
      })
      .catch((error) => console.error('Error signing in with Google:', error));
  };

  const linkSignUp = (e) => {
    e.preventDefault();
    setSignUp(true);
    navigate('/');
  };
  return (
    <div>
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image" /> */}
          {/* <img src="https://www.sirensearch.co.uk/wp-content/uploads/2020/05/Linkedin-FB.jpg" class="img-fluid" alt="Phone image" /> */}
      </div>
      <div className='d-flex justify-content-between container mt-5'>
      <div className='card-body text-start'>
        <h1>Authentication Page Using FireBase</h1>
        <form action="" className='w-75'>
        {signUp && (
          <>
            <label>User Name:</label>
            <input
              type="text"
              name="user"
              className={`form-control ${errors.user ? 'is-invalid' : ''}`}
              value={user}
              onChange={handleChange}
              placeholder="Enter UserName"
            />
            {errors.user && <div className="invalid-feedback">{errors.user}</div>}
          </>
        )}
        <br /> <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        <br /> <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        <br /> <br />
        <button onClick={!signUp ? handleSignIn : handleSignUp} className='btn btn-success w-50'>
          {!signUp ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
        <p className='mt-2'>Don't Have an Account ? please <a href="/" onClick={linkSignUp}>Sign Up</a></p>
        <p className=''>
           Sign In With <a href='/' className='btn btn-primary  ' onClick={handleGoogleAccount}> 
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg> {' '}
           Google Account</a></p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg" alt="" />
      </div>

    </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default UserAuthenticationPage
