export function ResumeShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateResume(props.resume.id, params, () => event.target.reset());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Student Info:</div>
        <div>
          First Name: <input defaultValue="props.resume.first_name" name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input defaultValue="props.resume.last_name" name="last_name" type="text" />
        </div>
        <div>
          Email: <input defaultValue="props.resume.email" name="email" type="text" />
        </div>
        <div>
          Phone Number: <input defaultValue="props.resume.phone_number" name="phone_number" type="number" />
        </div>
        <div>Skills:</div>
        <div>Experience:</div>
        <div>
          Company Name: <input defaultValue="props.resume.company_name" name="company_name" type="text" />
        </div>
        <div>
          Job Title: <input defaultValue="props.resume.job_title" name="job_title" type="text" />
        </div>
        <div>
          Start Date: <input defaultValue="props.resume.start_date" name="start_date" type="date" />
        </div>
        <div>
          End Date: <input defaultValue="props.resume.end_date" name="start_date" type="date" />
        </div>
        <div>
          Details: <input defaultValue="props.resume.details" name="details" type="paragraph" />
        </div>
        <button type="submit">Update resume</button>
      </form>
    </div>
  );
}
