import React from "react";
import { Button } from "semantic-ui-react";

function Logout() {
  function handleLogoutClick({setClient}) {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setClient(null);
      }
    });
  }
  return (
    <Button variant="outline" onClick={handleLogoutClick}>
      Logout
    </Button>
  );
}
export default Logout;
