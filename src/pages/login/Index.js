import "./style.css";
// import useTitle from "react-dynamic-title";
import useTitle from "../../Title";

import LoginForm from "../../components/login/LoginForm";
// import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";
import { useState } from "react";

export default function Login() {
  const [visible, setVisible] = useState(false);
  useTitle("Login");
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
