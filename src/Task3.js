// import react from "react";
// import Surya from './assets/surya2.jpg'

// function Demo(){
//     return(
//         <div>
//             <img src={Surya} alt="surya img"/>
//         </div>
//     )
// }
// export default Demo;




import {Component} from "react";
import Iphone from './assets/Iphone.jpg'
import Oppo from './assets/Oppo.webp'
import Samsung from './assets/Samsung.jpg'
import Vivo from './assets/Vivo.png'
import "./Task3.css"
const products=[{
    
    productName:"iphone",
    productPrice:144900,
    prouctAvailability:true,
    productImage:Iphone
},
{
    productName:"oppo",
    productPrice:35000,
    prouctAvailability:false,
    productImage:Oppo
},
{
    productName:"Samsung",
    productPrice:30000,
    prouctAvailability:true,
    productImage:Samsung
},
{
    productName:"oppo",
    productPrice:45000,
    prouctAvailability:false,
    productImage:Vivo
}
];
class Main extends Component{
    render(){ 
       return(
<>
<h2>MOBILES</h2>
<div className="mainbox">
    <div className={products[0].prouctAvailability?"available":"unavailable"}>
    <img src={products[0].productImage} alt={products.productName}></img>   
        <h1>{products[0].productName}</h1>
        <h1>{products[0].productPrice}</h1>
    </div>
    <div className={products[1].prouctAvailability?"available":"unavailable"}>
    <img src={products[1].productImage} alt={products.productName}></img>
        <h1>{products[1].productName}</h1>
        <h1>{products[1].productPrice}</h1>
    </div>
    <div className={products[2].prouctAvailability?"available":"unavailable"}>
    <img src={products[2].productImage} alt={products.productName}></img>
        <h1>{products[2].productName}</h1>
        <h1>{products[2].productPrice}</h1>
    </div>
    <div className={products[3].prouctAvailability?"available":"unavailable"}>
        <img src={products[3].productImage} alt={products.productName}></img>
        <h1>{products[3].productName}</h1>
        <h1>{products[3].productPrice}</h1>
    </div>
</div>
</>
        )
    }
}

export default Main;