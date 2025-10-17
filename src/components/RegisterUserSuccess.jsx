// src/components/RegisterUserSuccess.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const RegisterUserSuccess = () => {
  MySwal.fire({
    title: "Registration Successful 🎉",
    text: "Your account has been created successfully!",
    icon: "success",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Go to Login",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/auth/login"; // ✅ redirect when OK is clicked
    }
  });
};

export default RegisterUserSuccess;
