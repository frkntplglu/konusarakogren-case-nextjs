import React,{useState} from 'react'
import uuid4v4 from '../helper/uuid-generator'

function Testimonial() {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const leaveComment = e => {
        e.preventDefault();
        if(!fullName || !email || !comment ){
            return alert('Tüm alanların doldurulması zorunludur.')
        }
        const id = uuid4v4();
        const newComment = {
            id,
            fullName,
            email,
            comment
        }

        setCommentList([...commentList, newComment]);
        setFullname("");
        setEmail("");
        setComment("");
    }

    const deleteComment = id => {
        setCommentList(prevState => prevState.filter(item => item.id !== id))
    }


    return (
        <section className="page-section testimonial" id="testimonial">
            <div className="container">
                <div className="testimonial-form">
                    <h1 className="section-title">Yorumlar</h1>
                    <div className="testimonial-text">Siz de bir yorum bırakmak ister misiniz?</div>
                    <form action="" id="comment-form" onSubmit={leaveComment}>
                        <input type="text" placeholder="Ad Soyad" id="fullname" value={fullName} onChange={e => setFullname(e.target.value)} />
                        <input type="text" placeholder="E-Posta" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <textarea placeholder="Yorumunuz" id="comment" value={comment} onChange={e => setComment(e.target.value)}></textarea>
                        <button><span>Yorum Yap</span></button>
                    </form>
                </div>
                <div className="testimonial-content">
                    {
                        commentList.length === 0 ? "Henüz hiç yorum yapılmamış..." :
                        commentList.map(comment => (
                            <div className="comment" key={comment.id}>
                                <div className="comment-author">{comment.fullName}</div>
                                <div className="comment-author-email">{comment.email}</div>
                                <div className="comment-text">{comment.comment} <button onClick={() => deleteComment(comment.id)} className="delete-comment">SİL</button></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial
