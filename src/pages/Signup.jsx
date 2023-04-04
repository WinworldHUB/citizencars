import DefaultLayout from "../layouts/DefaultLayout";
import Checkbox from "../elements/Checkbox";

const Signup = () => {
  return (
    <DefaultLayout>
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url(/assets/img/collection/honda_s660_2015-2560x1600.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
        }}
        className="p-5"
      >
        <div
          className="p-5 text-center"
          style={{
            backgroundColor: "rgba(240, 240, 240, 0.1)",
            position: "absolute",
            top: "10px",
            right: "50px",
            backdropFilter: "blur(5px)",
            minHeight: "70%",
            width: "30%",
          }}
        >
          <h3 className="text-white">Log in to your account</h3>
          <p className="text-white">Create new account today.</p>
          <p className="text-white">Continue with</p>
          <img src="/assets/img/Google-Logo-Meaning_F 1.png" alt="" />
          <p className="pt-3 text-white">or</p>
          <div className="text-start pb-5">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Phone"
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
                  title="Private Seller"
                  onChecked={(isChecked) => {
                    console.log(isChecked);
                  }}
                  className="text-white"
                ></Checkbox>
              </div>
              <div className="form-group">
                <span className="text-white clickable">Forgot password</span>
              </div>
            </div>
            <div className="form-group">
              <Checkbox
                title="I accept the privacy policy"
                onChecked={(isChecked) => {
                  console.log(isChecked);
                }}
                className="text-white"
              ></Checkbox>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Registration</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Signup;
