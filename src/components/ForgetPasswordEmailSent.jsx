// src/components/ForgetPasswordEmailSent.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ForgetPasswordEmailSent = () => {
  MySwal.fire({
    title: "Email Sent 📩",
    text: "A password reset link has been sent to your email. Please check your inbox and spam folder.",
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
    draggable: true,
  });
};

export default ForgetPasswordEmailSent;
