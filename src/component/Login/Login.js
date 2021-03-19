import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.confige";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import'./Login.css'
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app();
}

function Login() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    photo:'',
    error: ''
  })
  var provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();

  const [loginUser, setLoginUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
  
 

  const handleGoogleSineIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      const newUserInfo = {...user};
      setLoginUser(newUserInfo)
      setUser(user)
      history.replace(from);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  const handleSineIn = (event) => {
    if (user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.success = true;
        setUser(newUserInfo)
        setLoginUser(newUserInfo)
        history.replace(from);
      })
      .catch(function (error) {
        const newUserInfo ={...user}
        newUserInfo.error = error.message
        setUser(newUserInfo)
      })
    }
    event.preventDefault();
  }
  const handleBlur = (event) => {
    let isFormValid = true;
   if (event.target.name === "email") {
   isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
   }
   if (event.target.name === "password") {
      isFormValid = event.target.value.length > 8 ;
   }
   if (isFormValid) {
     const newUserInfo = {...user}
     newUserInfo[event.target.name] = event.target.value;
     setUser(newUserInfo)
   }
  }
  const handleFacebookSineIn = () => {
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    setUser(user)
    const newUserInfo = {...user};
    setLoginUser(newUserInfo)
    history.replace(from);
  })
  .catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

  
  }
  return (
    <div class="main">
      <section className="signup">
      <div className="container">
          <div className="signup-content">
              <form method="POST" id="signup-form" className="signup-form" onSubmit={handleSineIn}>
                  <h2 className="form-title">Create account</h2>
                  <div className="form-group">
                      <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"  onBlur={handleBlur} required/>
                  </div>
                  <div className="form-group">
                      <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"  onBlur={handleBlur} required/>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-input" name="password" id="password" placeholder="Password"  onBlur={handleBlur} required/>
                      <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"  onBlur={handleBlur} required/>
                  </div>
                  <div className="form-group">
                      <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                      <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                  </div>
                  <div className="form-group">
                      <button type="submit" name="submit" id="submit" className="form-submit" value="Sign up">Sine In</button>
                  </div>
              </form>
              <p className="loginhere">
                  Have already an account ? <Link to="/login-user" className="loginhere-link">Login here</Link>
              </p>
              <div class="d-flex justify-content-center">
                <button className="mr-3" onClick={handleGoogleSineIn}>sine in with google <FontAwesomeIcon icon={faGoogle}/></button>
                <button onClick={handleFacebookSineIn}>sine in with facebook <FontAwesomeIcon icon={faFacebook}/></button>
              </div>
          </div>
          
      </div>
  </section>
</div>  
  );
}

export default Login;


{/* <div className="d-flex justify-content-center">
      <div className="form">
        <div className="">
          <form onSubmit={handleSineIn} className="text-center">
            <input type="text" name="name" required onBlur={handleBlur}/><br/><br/>
            <input type="text" name="email" onBlur={handleBlur} placeholder="email" required/><br/><br/>

            <input type="password" name="password" onBlur={handleBlur} placeholder="password" required/><br/><br/>

            <input type="password" name="retype-password" placeholder="retype password" required/><br/><br/>

            <button>Sine In</button><br/><br/>
          </form>
        </div>
        <button onClick={handleGoogleSineIn}>sine in with google <FontAwesomeIcon icon={faGoogle}/></button> <br/><br/>
        <button onClick={handleFacebookSineIn}>sine in with facebook <FontAwesomeIcon icon={faFacebook}/></button>
        {/* <p>{user.error}</p> */}
    //   </div>
    // </div> */}

    
    