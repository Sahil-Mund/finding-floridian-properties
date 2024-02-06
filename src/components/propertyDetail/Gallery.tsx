import React from 'react'

interface GalleryProps {
    // Add your component's props here
    data: string[]
}

const Gallery: React.FC<GalleryProps> = ({ data = [] }) => {
    return (
        <div className="gallery-container">
            <h2 className='gallery-title'>Gallery</h2>
            <div className="gallery-grid">
                {data.map((img) => <div className="gallery-item"><img src={img} alt="" /></div>)}
            </div>
        </div>
    )
}

export default Gallery