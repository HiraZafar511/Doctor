import { ItemMeta } from "semantic-ui-react";

const List = ({item}) => {
    return (  <div class="profile-widget">
    <div class="doc-img">
        <a href="#">
            <img class="img-fluid" alt="User Image" src={`/images/${item.img}`}/>
        </a>
        <a href="#" class="fav-btn">
            <i class="far fa-bookmark"></i>
        </a>
    </div>
    <div class="pro-content">
        <h3 class="title">
            <a href="doctor-profile.html">{item.name}</a> 
            <i class="fas fa-check-circle verified"></i>
        </h3>
        <p class="speciality">{item.detail}</p>
        <div class="rating">
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <span class="d-inline-block average-rating">{item.rating}</span>
        </div>
        <ul class="available-info">
            <li>
                <i class="fas fa-map-marker-alt"></i> {item.loc}
            </li>
            <li>
                <i class="far fa-clock"></i> {item.date}
            </li>
            <li>
                <i class="far fa-money-bill-alt"></i> {item.fee} <i class="fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Lorem Ipsum"></i>
            </li>
        </ul>
        <div class="row row-sm">
            <div class="col-6">
                <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
            </div>
            <div class="col-6">
                <a href="#" class="btn book-btn">Book Now</a>
            </div>
        </div>
    </div>
</div>
);
}
 
export default List;