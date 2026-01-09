import { useState } from "react";

function Login({ onSuccess }) {
  const [pwd1, setpwd1] = useState("");
  const [pwd2, setpwd2] = useState("");
  const [same, setsame] = useState(true);

  function handelPassword1(e) {
    setpwd1(e.target.value);
  }

  function handelPassword2(e) {
    const value = e.target.value;
    setpwd2(value);

    if (pwd1 === value && pwd1 !== "") {
      setsame(true);
    } else {
      setsame(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (pwd1 === pwd2 && pwd1 !== "") {
      onSuccess(); 
    }
  }

  return (
    <>
      <form
        className="my-5"
        style={{ width: "50%", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={pwd1}
            onChange={handelPassword1}
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Re-enter Password</label>
          <input
            value={pwd2}
            onChange={handelPassword2}
            type="password"
            className="form-control"
          />
        </div>

        {!same && <p style={{ color: "red" }}>Password not match</p>}

        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </>
  );
}

export default Login;
