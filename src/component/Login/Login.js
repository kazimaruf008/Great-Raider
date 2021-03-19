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
    <div>
      <div className="mt-5">
        <form action="" onSubmit={handleSineIn} className="text-center">
          <h2>Create An Account</h2>
          <input type="text" name="name" placeholder="Name" required onBlur={handleBlur}/> <br/><br/>
          <input type="text" name="email" placeholder="user name or email" required onBlur={handleBlur}/> <br/><br/>
          <input type='password' name="password" placeholder="password" required onBlur={handleBlur}/> <br/><br/>
          <input type="password" name="retype-password" placeholder="retype password" required/><br/><br/>
          <button>Sine In</button><br/><br/>
        </form>
      </div>
      <div className="text-center">
        <button onClick={handleGoogleSineIn}>sine in with google <FontAwesomeIcon icon={faGoogle}/></button> <br/><br/>
        <button onClick={handleFacebookSineIn}>sine in with facebook <FontAwesomeIcon icon={faFacebook}/></button>
      </div>
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