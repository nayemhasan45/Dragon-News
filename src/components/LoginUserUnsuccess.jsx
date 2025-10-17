import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginUserUnsuccess = () => {
  MySwal.fire({
    title: "Login Failed ❌",
    text: "Invalid email or password. Please try again.",
    icon: "error",
    confirmButtonColor: "#d33",
    confirmButtonText: "Try Again",
  });
};

export default LoginUserUnsuccess;
