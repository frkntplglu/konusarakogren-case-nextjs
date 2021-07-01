import React,{useState, useEffect} from 'react'

function Header() {
    const [isShow, setIsShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY;
            if(scrollPosition > 90){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
         });
    })
    const closeMenu = () => {
        const screenSize = window.innerWidth;
        if(screenSize > 1024) return
        setIsShow(!isShow)
    }
    return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container">
            <div className="logo"><a href="#">FT</a></div>
            <div className="mobile-menu-btn">
                <button onClick={() => setIsShow(!isShow)}><i className="fas fa-bars"></i></button>
            </div>
            <nav className={`main-menu ${isShow ? "open-menu" : ""}`}>
                <div className="mobile-close" onClick={() => setIsShow(!isShow)}><button><i className="fas fa-times"></i></button></div>
                <a href="#home" onClick={closeMenu}>anasayfa</a>
                <a href="#about" onClick={closeMenu}>hakkımda</a>
                <a href="#works" onClick={closeMenu}>yaptıklarım</a>
                <a href="#testimonial" onClick={closeMenu}>yorumlar</a>
                <a href="#contact" onClick={closeMenu}>iletişim</a>
            </nav>
        </div>
    </header>
    )
}

export default Header