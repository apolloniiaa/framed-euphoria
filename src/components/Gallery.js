import React, { useState } from 'react';
import '../components/Model.css';
import Img5 from '../assets/img/img5.jpg';
import Img6 from '../assets/img/img6.jpg';
import Img0 from '../assets/img/img0.jpg';
import Img11 from '../assets/img/img11.jpg';
import Img12 from '../assets/img/img12.jpg';
import Img13 from '../assets/img/img13.jpg';
import Img22 from '../assets/img/img22.jpg';
import Img23 from '../assets/img/img23.jpg';
import Img24 from '../assets/img/img24.jpg';
import style from '../components/Gallery.module.css';

const Gallery = () => {
  let data = [
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 0,
      imgSrc: Img0,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const openModel = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };
  return (
    <>
      <div className={model ? 'model open' : 'model'} onClick={closeModel}>
        <img src={tempimgSrc} />
      </div>

      <div className={style.gallery}>
        {data.map((item, index) => {
          return (
            <div
              className={style.pics}
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} className={style.images} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
