import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (user) {
        navigate("/");
      }
    }, 2000);
  }, [user]);

  const handleChange = (e) => {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    // console.log(e.target);
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all fields 🙄");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo className="logo" />

        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* NAME FIELD */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* EMAIL FIELD */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* PASSWORD FIELD */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "Loading..." : "Demo App"}
        </button>
        {values.isMember ? (
          <p>
            Not a member yet?{" "}
            <button className="member-btn" type="button" onClick={toggleMember}>
              Register
            </button>
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <button className="member-btn" type="button" onClick={toggleMember}>
              Login
            </button>
          </p>
        )}
      </form>
    </Wrapper>
  );
};

export default Register;
