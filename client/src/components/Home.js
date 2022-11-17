import { useState, React } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Checkbox,
  Message,
} from "semantic-ui-react";

function Home({ client, setClient }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState("hide");
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
      .then((data) => {
        if (data.error) {
          setErrors(data.error);
        } else {
          setClient(data);
          setErrors("hide");
        }
      });
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
        resp.json().then((client) => {
          setErrors("success");
        });
      } else {
        resp.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  };

  function handleClickTerms() {
    //if the box is checked, then hide everything, else dont
    setAgreeTerms(!agreeTerms);
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://cdn-icons-png.flaticon.com/512/1596/1596810.png" />{" "}
          Welcome to PUPPUR!
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              placeholder="Username..."
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
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

            {agreeTerms ? (
              <Button
                className="login-button"
                color="teal"
                size="large"
                onClick={handleSubmit}
                type="submit"

              >
                Login
              </Button>
            ) : null}
            {agreeTerms ? (
              <Button
                color="teal"
                className="signup-button"
                size="large"
                onClick={handleSignup}
                type="submit"
              >
                Sign up
              </Button>
            ) : null}
          </Segment>
        </Form>
        {errors === "hide" ? null : errors === "success" ? (
          <Message
            success
            header="Form Completed"
            content="You're all signed up!"
          />
        ) : (
          <Message
            error
            header="Action Forbidden"
            content="Sorry, that username/password is invalid."
          />
        )}

      </Grid.Column>

    </Grid>

  );
}
export default Home;
