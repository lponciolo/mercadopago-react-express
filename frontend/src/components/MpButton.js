import { Button } from "@material-ui/core";
import axios from "axios";

const MpPaymentHandler = async (cookies) => {
  console.log(cookies);
  const response = await axios.post(
    "https://mercadopagobackend.herokuapp.com/payment/new",
    { cookies: cookies }
  );
  window.location.href = response.data.init_point;
};

const MpButton = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => MpPaymentHandler(props.cookies)}
    >
      🍪 Buy Leito a Cookie 🍪
    </Button>
  );
};

export default MpButton;
