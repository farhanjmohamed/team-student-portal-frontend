export function ResumeShow(props) {
  return (
    <div>
      <h1>Resume Information</h1>
      <p>Student Info: {props.resume["student"]}</p>
      <p>Skills: {props.resume["skills"]}</p>
      <p>Education: {props.resume["education"]}</p>
      <p>Capstone: {props.resume["capstone"]}</p>
    </div>
  );
}
