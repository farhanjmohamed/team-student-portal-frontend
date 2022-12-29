export function ResumeShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateResume(props.resume.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Student information</h1>
      <form onSubmit={handleSubmit}>
        <h1>Student Info:</h1>
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="number" />
        </div>
        <h1>Skills:</h1>
        <h1>Experience:</h1>
        <div>
          Company Name: <input name="company_name" type="text" />
        </div>
        <div>
          Job Title: <input name="job_title" type="text" />
        </div>
        <div>
          Start Date: <input name="start_date" type="date" />
        </div>
        <div>
          End Date: <input name="start_date" type="date" />
        </div>
        <div>
          Details: <input name="details" type="paragraph" />
        </div>
        <button type="submit">Update resume</button>
      </form>
    </div>
  );
}
