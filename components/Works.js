import React from 'react'
import Slider from "react-slick";

function Works() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 667,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    };
    return (
        <section className="page-section works" id="works">
            <div className="container">
                <h1 className="section-title">Yaptığım İşler</h1>
                <div id="works-slider">
                    <Slider {...settings}>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p1.jpg" alt="SMM Panel" /></div>
                            <div className="work-links">
                                <a href="https://furkan.dev/portfolyo/smmpanel/" title="SMM Panel" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p2.jpg" alt="Çan Acıktım" /></div>
                            <div className="work-links">
                                <a href="https://furkan.dev/portfolyo/canaciktim/" title="Çan Acıktım" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p4.jpg" alt="Aktaş & Hüseyinoğlu Hukuk" /></div>
                            <div className="work-links">
                                <a href="http://aktas-huseyinoglu.av.tr/" title="Aktaş & Hüseyinoğlu Hukuk" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p5.jpg" alt="Binterplast" /></div>
                            <div className="work-links">
                                <a href="https://www.binterplast.com/tr" title="Binterplast" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p6.jpg" alt="Karali Çay" /></div>
                            <div className="work-links">
                                <a href="https://www.karalicay.com/tr" title="Karali Çay" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-image"><img src="assets/img/p7.jpg" alt="Servis Q" /></div>
                            <div className="work-links">
                                <a href="https://servisq.com/" title="Servis Q" rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Works
