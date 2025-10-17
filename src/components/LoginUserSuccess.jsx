// src/components/LoginUserSuccess.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginUserSuccess = () => {
  MySwal.fire({
    title: "Welcome!",
    text: "You have successfully logged in 🎉",
    icon: "success",
    confirmButtonColor: "#3085d6",
    draggable: true,
  });
};

export default LoginUserSuccess;
