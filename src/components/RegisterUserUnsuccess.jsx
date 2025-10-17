import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const RegisterUserUnsuccess = () => {
  MySwal.fire({
    title: "Registration Failed ❌",
    text: "Something went wrong while creating your account. Please try again.",
    icon: "error",
    confirmButtonColor: "#d33",
    confirmButtonText: "Try Again",
  });
};

export default RegisterUserUnsuccess;
