import { useState, useContext } from "react";
import useCheckValid from "../../hooks/use-check-valid";
import CustomForm from "../UI/CustomForm";
import CustomTitle from "../UI/CustomTitle";
import InvalidInput from "../UI/InvalidInput";
import Error from "../UI/Error";
import useHttp from "../../hooks/use-http";
import CustomButton from "../UI/CustomButton";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    required: true,
  },
];

const method = "POST";
const headers = { "Content-Type": "application/json" };

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const { checkValid, valid } = useCheckValid();
  const { error, sendRequest } = useHttp();
  let url = "";

  if (login) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4z8kS9-ILE_miApUkFF-aL5GC0Ihaxfw";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4z8kS9-ILE_miApUkFF-aL5GC0Ihaxfw";
  }

  const successHandler = (myObj) => {
    authCtx.login(myObj.idToken);
    // memory leak here...
    navigate("/posts");
  };

  const submitHandler = (myObj) => {
    const email = myObj.email.value;
    const password = myObj.password.value;

    const areValid = checkValid([email, password]);
    if (!areValid) {
      return;
    }

    const body = {
      email,
      password,
      returnSecureToken: true,
    };

    sendRequest({ url, method, headers, body }, successHandler);
  };

  const toggleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  return (
    <>
      {error && <Error />}
      <CustomTitle title={`${login ? "Login" : "Sign Up"}`} />
      <CustomForm
        inputs={inputs}
        buttonText={`${login ? "Login" : "Sign Up"}`}
        onSubmit={submitHandler}
      />
      <div className="centered">
        <CustomButton color="secondary" onClick={toggleLogin}>
          {login ? "Need to sign up?" : "Need to login?"}
        </CustomButton>
      </div>
      {!valid && <InvalidInput />}
    </>
  );
};

export default Auth;
