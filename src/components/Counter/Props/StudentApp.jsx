import Student from "./Student";

export default function App() {
  return (
    <>
      <Student name="Haryy" age={20} isStudent={true} />
      <Student name="Dan" age={21} isStudent={false} />
      <Student />
    </>
  );
}
