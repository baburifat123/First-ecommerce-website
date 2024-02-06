import "./SingUp.css";
const SingUp = () => {
  return (
    <div className="mains">
      <div className="sing">
        <h1 className="text-3xl font-bold">Sing Up</h1>
        <div className="in">
          <input type="text" placeholder="Enter Name" />
          <input type="email" name="" placeholder="Enter Your Email" id="" />
          <input
            type="password"
            name=""
            placeholder="Enert Your Password"
            id=""
          />
        </div>
        <div className="buttons">
          <button>Continue</button>
          <h1>
            Already have a account ?{" "}
            <span className="text-red-600">Login here</span>
          </h1>
        </div>
        <div className="chek">
          <input type="checkbox" />
          <h1> i agree to the terms use and privicy policy</h1>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
