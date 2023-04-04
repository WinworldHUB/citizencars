import DefaultLayout from "../layouts/DefaultLayout";
import Checkbox from "../elements/Checkbox";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <DefaultLayout>
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url(/assets/img/collection/toyota_corolla_2013-1920x1200.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          minHeight: "700px",
        }}
        className="p-5"
      >
        <div
          className="p-5 text-center"
          style={{
            backgroundColor: "rgba(240, 240, 240, 0.7)",
            position: "absolute",
            right: "50px",
            backdropFilter: "blur(5px)",
            minHeight: "70%",
            width: "30%",
          }}
        >
          <h3>Log in to your account</h3>
          <p>Welcome back ! Sing in to your account</p>
          <p>Continue with</p>
          <img src="/assets/img/Google-Logo-Meaning_F 1.png" alt="" />
          <p className="pt-3">or</p>
          <div className="text-start pb-5">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Email or Username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name=""
                id=""
                placeholder="password"
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-group">
                <Checkbox
                  title="Remember me"
                  onChecked={(isChecked) => {
                    console.log(isChecked);
                  }}
                ></Checkbox>
              </div>
              <div className="form-group">
                <span className="text-primary clickable">Forgot password</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Signin;
