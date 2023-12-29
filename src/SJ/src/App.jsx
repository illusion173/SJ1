import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
import "./App.css";
//Front Page
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Please Sign in</h2>
      <Authenticator loginMechanism={["email"]} hideSignUp={true}>
        {({ signOut, user }) => (
          <main>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      <div>Work in Progress</div>
    </>
  );
}

export default App;
