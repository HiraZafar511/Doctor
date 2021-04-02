const Overview = () => {
  return (
    <div className="overview">
      <div className="row">
        <div class="col-md-12 col-lg-9">
          <div class="widget about-widget">
            <h4 class="widget-title">About Me</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="widget education-widget">
            <h4 class="widget-title">Education</h4>
            <div class="experience-box">
              <ul class="experience-list">
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <a href="#/" class="name">
                        American Cardiologist Medical University
                      </a>
                      <div>BDS</div>
                      <span class="time">1998 - 2003</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <a href="#/" class="name">
                        American Cardiologist Medical University
                      </a>
                      <div>MDS</div>
                      <span class="time">2003 - 2005</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="widget experience-widget">
            <h4 class="widget-title">Work &amp; Experience</h4>
            <div class="experience-box">
              <ul class="experience-list">
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <a href="#/" class="name">
                        Glowing Smiles Family Cardiologist Clinic
                      </a>
                      <span class="time">2010 - Present (5 years)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <a href="#/" class="name">
                        Comfort Care Cardiologist Clinic
                      </a>
                      <span class="time">2007 - 2010 (3 years)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <a href="#/" class="name">
                        Dream Smile Cardiologist Practice
                      </a>
                      <span class="time">2005 - 2007 (2 years)</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="widget awards-widget">
            <h4 class="widget-title">Awards</h4>
            <div class="experience-box">
              <ul class="experience-list">
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <p class="exp-year">July 2019</p>
                      <h4 class="exp-title">Humanitarian Award</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <p class="exp-year">March 2011</p>
                      <h4 class="exp-title">
                        Certificate for International Volunteer Service
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="experience-user">
                    <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                    <div class="timeline-content">
                      <p class="exp-year">May 2008</p>
                      <h4 class="exp-title">
                        The Cardiologist Professional of The Year Award
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="service-list">
            <h4>Services</h4>
            <ul class="clearfix">
              <li> <i class="fas fa-arrow-right"></i>Tooth cleaning </li>
              <li> <i class="fas fa-arrow-right"></i>Root Canal Therapy</li>
              <li> <i class="fas fa-arrow-right"></i>Implants</li>
              <li> <i class="fas fa-arrow-right"></i>Composite Bonding</li>
              <li> <i class="fas fa-arrow-right"></i>Fissure Sealants</li>
              <li> <i class="fas fa-arrow-right"></i>Surgical Extractions</li>
            </ul>
          </div>

          <div class="service-list">
            <h4>Specializations</h4>
            <ul class="clearfix">
              <li> <i class="fas fa-arrow-right"></i>Children Care</li>
              <li> <i class="fas fa-arrow-right"></i>Cardiologist Care</li>
              <li> <i class="fas fa-arrow-right"></i>Oral and Maxillofacial Surgery </li>
              <li> <i class="fas fa-arrow-right"></i>Orthodontist</li>
              <li> <i class="fas fa-arrow-right"></i>Periodontist</li>
              <li> <i class="fas fa-arrow-right"></i>Prosthodontics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
