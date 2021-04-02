const Appointment = () => {
    return ( <div class=" success-page-cont" >
    <div class="container-fluid">
    
        <div class="row justify-content-center">
            <div class="col-lg-6">
            
             
                <div class="card success-card">
                    <div class="card-body">
                        <div class="success-cont">
                            <i class="fas fa-check"></i>
                            <h3>Appointment booked Successfully!</h3>
                            <p>Appointment booked with <strong>Dr. Fred Ortego</strong><br/> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
                            <a href="invoice-view.html" class="btn btn-primary view-inv-btn">View Invoice</a>
                        </div>
                    </div>
                </div>
              
                
            </div>
        </div>
        
    </div>
</div> );
}
 
export default Appointment;