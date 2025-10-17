// src/components/LogoutUserSuccess.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LogoutUserSuccess = () => {
  MySwal.fire({
    title: "Logged Out",
    text: "You have successfully logged out 👋",
    icon: "info",
    confirmButtonColor: "#3085d6",
  });
};

export default LogoutUserSuccess;
