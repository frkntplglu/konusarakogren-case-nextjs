import React from 'react'
import WorkBox from './WorkBox'
import Slider from "react-slick";

function Works() {
    const portfolios = [
        {
            id: 1,
            title: "SMM Panel",
            link: "https://furkan.dev/portfolyo/smmpanel/",
            image: "/assets/img/p1.jpg",
        },
        {
            id: 2,
            title: "Çan Acıktım",
            link: "https://furkan.dev/portfolyo/canaciktim/",
            image: "/assets/img/p2.jpg",
        },
        {
            id: 4,
            title: "Aktaş & Hüseyinoğlu Hukuk",
            link: "http://aktas-huseyinoglu.av.tr/",
            image: "/assets/img/p4.jpg",
        },
        {
            id: 5,
            title: "Binterplast",
            link: "https://www.binterplast.com/tr",
            image: "/assets/img/p5.jpg",
        },
        {
            id: 6,
            title: "Servis Q",
            link: "https://servisq.com/",
            image: "/assets/img/p6.jpg",
        },
        {
            id: 7,
            title: "SMM Panel",
            link: "https://furkan.dev/portfolyo/smmpanel/",
            image: "/assets/img/p7.jpg",
        }
    ]
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
                        {portfolios.map(portfolio => (
                            <WorkBox key={portfolio.id} title={portfolio.title} link={portfolio.link} image={portfolio.image} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Works
