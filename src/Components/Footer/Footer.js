import React from 'react'

function Footer() {
    return (
        <div className="footer-container">
            <div className="site-footer">
                <div className="container">
                    <div className="row justify-content-center copyright">
                        <div className="col-lg-7 text-center">
                            <div className="widget">
                                <ul className="social list-unstyled">
                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            
                            <div className="widget">
                                <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank" rel="nofollow noopener">Colorlib</a>
                                </p>
                                <div className="d-block">
                                    <a href="#" className="m-2">Terms &amp; Conditions</a>/
                                    <a href="#" className="m-2">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
    )
}

export default Footer
