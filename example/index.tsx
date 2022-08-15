import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Match, Show, Switch } from '../.';

type Role = "user" | "admin" | "";

const App = () => {
  const [role, setRole] = React.useState<Role>("user");
  return (
    <>
    <Switch fallback={<p>This is Default Children</p>}>
      <Match when={role === "user"}>
        <p>User Component</p>
      </Match>
      <Match when={role === "admin"}>
        <p>Admin Component</p>
      </Match>
    </Switch>
    <button onClick={() => setRole("admin")}>Change to 'admin'</button>
    <button onClick={() => setRole("user")}>Change to 'user'</button>
    <button onClick={() => setRole("")}>Default Fallback</button>

    <Show when={role === "admin"} fallback={<p>Role is User</p>}>
      <p>Role is Admin</p>
    </Show>
  </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
