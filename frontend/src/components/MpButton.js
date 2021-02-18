
import { Button } from "@material-ui/core";
import axios from 'axios'

const MpPaymentHandler = async()=>{
const response = await axios.post('https://mercadopagobackend.herokuapp.com/payment/new')
window.location.href = response.data.init_point
}



const MpButton = () => {  
return(
<Button variant="contained" color="primary" onClick={ ()=>MpPaymentHandler()}>
🍪 Buy Leito a Cookie 🍪
</Button>
)
}

export default MpButton