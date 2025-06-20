import Student from "./Student";
import { Lists } from "./Student";

export default function App() {
  return (
    <>
      <h1>Props</h1>
      <Student name="Haryy" age={20} isStudent={true} isLoggedIn={true} />
      <Student name="Dan" age={21} isStudent={true} isLoggedIn={false} />
      <Lists />
    </>
  );
}
