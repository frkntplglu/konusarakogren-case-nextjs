import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <section className="page-section about" id="about">
            <div className="container">
                <div className="about-image">
                    <Image
                        src="/assets/img/me.jpg"
                        alt="Furkan Topaloğlu"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="about-content">
                    <h1 className="section-title">Ben Kimim?</h1>
                    <p>İstanbul Teknik Üniversitesi 4. sınıf Bilgisayar Mühendisliği öğrencisiyim. Profesyonel olarak 4-5 yıldır arayüz geliştiriyorum.</p>
                    <p>Genel olarak HTML, CSS, JavaScript, React ve Redux gibi teknolojilerle çalışmaktayım. Fakat gerek hobi olarak gerekse ihtiyaca yönelik farklı dil ve teknolojilere hızlıca adapte olabilirim.</p>
                </div>
            </div>
        </section>
    )
}

export default About
