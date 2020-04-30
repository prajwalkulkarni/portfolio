import React,{Component} from 'react';

export default class Work extends Component{

    render(){
        return (

            <section id="portfolio">
              <div className="row">
                <div className="twelve columns collapsed">
                  <h1>Check Out Some of My Works.</h1>
                  {/* portfolio-wrapper */}
                  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01" title>
                          <img alt="" src="images/portfolio/ic_launcher_foreground.png" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>Splitster</h5>
                              <p>Android App</p>
                            </div>
                          </div>
                          <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                      </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-02" title>
                          <img alt="" src="images/portfolio/PS.png" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>Console</h5>
                              <p>Web/App Development</p>
                            </div>
                          </div>
                          <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                      </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-03" title>
                          <img alt="" src="images/portfolio/judah.jpg" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>Judah</h5>
                              <p>Webdesign</p>
                            </div>
                          </div>
                          <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                      </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-04" title>
                          <img alt="" src="images/portfolio/into-the-light.jpg" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>Into The Light</h5>
                              <p>Photography</p>
                            </div>
                          </div>
                          <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                      </div>
                    </div> {/* item end */}
                    
                   
                    
                   
                  </div> {/* portfolio-wrapper end */}
                </div> {/* twelve columns end */}
                {/* Modal Popup
                --------------------------------------------------------------- */}
                <div id="modal-01" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/ic_launcher_foreground copy.png" alt="" />
                  <div className="description-box">
                    <h4>Splitster</h4>
                    <p>Bill split application,built for Android,written natively.</p>
                    <span className="categories"><i className="fa fa-tag" />Finance, App</span>
                  </div>
                  <div className="link-box">
                    <a href="https://play.google.com/store/apps/details?id=com.app.splitster&hl=en_US">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-01 End */}
                <div id="modal-02" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
                  <div className="description-box">
                    <h4>PhaeShift</h4>
                    <p>Application for university's annual tech symposium,built on React Native. </p>
                    <span className="categories"><i className="fa fa-tag" />Tech, Web Development</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-02 End */}
                <div id="modal-03" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
                  <div className="description-box">
                    <h4>Judah</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-03 End */}
                <div id="modal-04" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
                  <div className="description-box">
                    <h4>Into the Light</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-04 End */}
                <div id="modal-05" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
                  <div className="description-box">
                    <h4>Farmer Boy</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-05 End */}
                <div id="modal-06" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
                  <div className="description-box">
                    <h4>Girl</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-06 End */}
                <div id="modal-07" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
                  <div className="description-box">
                    <h4>Origami</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-07 End */}
                <div id="modal-08" className="popup-modal mfp-hide">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
                  <div className="description-box">
                    <h4>Retrocam</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>{/* modal-01 End */}
              </div> {/* row End */}
            </section>
          );
    }
}