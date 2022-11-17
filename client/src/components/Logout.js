import React from "react";
import { Button } from "semantic-ui-react";

function Logout({setClient}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setClient(null);
      }
    });
  }
  return (
    <Button color='teal' variant="outline" onClick={handleLogoutClick}>
      Logout
    </Button>
  );
}
export default Logout;
