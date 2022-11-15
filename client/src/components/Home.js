import { useState, React } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Home({ client, setClient }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState([]);
  let [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    //submits what the user logged in with (username/password)
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => resp.json())
      .then((data) => setClient(data));
  };

  const handleSignup = (e) => {
    //submits what the user logged in with (username/password)
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((client) => setLogin(client));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  };

  function handleClickTerms() {
    //if the box is checked, then hide everything, else dont
    setAgreeTerms(!agreeTerms);
  }

  return (
    <div>
      <h1>Welcome to the Doggie.io!</h1>
      <Form>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input
            type="text"
            id="password"
            autoComplete="off"
            value={password}
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            onClick={handleClickTerms}
            label="I agree to the Terms and Conditions"
          />
        </Form.Field>

        {agreeTerms ? (
          <Button onClick={handleSubmit} type="submit">
            Login
          </Button>
        ) : null}
        {agreeTerms ? (
          <Button onClick={handleSignup} type="submit">
            Sign up
          </Button>
        ) : null}
      </Form>
    </div>
  );
}
export default Home;
