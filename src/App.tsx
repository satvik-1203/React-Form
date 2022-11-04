import { useState } from "react";

function App() {
  const [formDataState, setFormDataState] = useState<{ [key: string]: string }>(
    {}
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formDataObj: { [key: string]: string } = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value as string;
    });

    setFormDataState(formDataObj);
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit} action="">
        <div>
          <label>Full Name</label>
          <input type="text" name="fullname" />
        </div>
        <div>
          <label>Date Of Birth</label>
          <input type="date" name="dob" id="" />
        </div>
        <div>
          <div>
            <input type="radio" name="gender" value="male" />
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
          </div>
        </div>
        <div>
          <label>Paragraph</label>
          <textarea name="paragraph"></textarea>
        </div>
        <div>
          <input type="checkbox" name="Working" value="yes" />
          <label>Working?</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Form Data</h2>
      <div>{JSON.stringify(formDataState)}</div>
    </div>
  );
}

export default App;
