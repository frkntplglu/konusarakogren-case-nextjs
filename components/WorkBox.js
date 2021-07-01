import React from 'react'
import Image from 'next/image'

function WorkBox({image, title, link}) {
    return (
        <div className="work">
            <div className="work-image">
                <Image
                    src={image}
                    alt={title}
                    width={350}
                    height={250}
                />
            </div>
            <div className="work-links">
                <a href={link} title={title} rel="noopener" target="_blank" className="detail"><i className="fas fa-link"></i></a>
            </div>
        </div>
    )
}

export default WorkBox
