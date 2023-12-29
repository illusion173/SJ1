import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import "./App.css";
import { Link } from "react-router-dom";

//Front Page
Amplify.configure(awsExports);
function Login() {
  return (
    <>
      <h2>Please Sign in</h2>
      <Authenticator loginMechanism={["email"]} hideSignUp={true}>
        {({ signOut, user }) => <Link to="/">Home</Link>}
      </Authenticator>
    </>
  );
}

export default Login;
