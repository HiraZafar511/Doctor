import Personalinfo from "./Personalinfo";
import BookingSum from "./BookingSum";

const index = () => {
    return (<div className="checkout">
<div className="container">
    <div className="row">
    <div class="col-md-7 col-lg-8">
        <Personalinfo/>
    </div>
    <div class="col-md-5 col-lg-4 theiaStickySidebar">
       <BookingSum/>
    </div>
    </div>
</div>
    </div> );
}
 
export default index;