import Student from "./Student";
export default function App() {
  return (
    <>
      <Student name="Haryy" age={20} isStudent={true} isLoggedIn={true} />
      <Student name="Dan" age={21} isStudent={true} isLoggedIn={false} />
      <Student name="Ron" age={50} isStudent={false} isLoggedIn={true} />
    </>
  );
}
