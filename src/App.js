import Input from "./Components/Input";
import { useState } from "react";
import Display from "./Components/Display";

function App() {
  const [user, setUser] = useState(null);
  const display = user && <Display user={user} />;

  return (
    <div>
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

export default App;
