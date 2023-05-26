//Import Images
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.jpg';
import img5 from './assets/img/img5.jpg';
import img6 from './assets/img/img6.jpg';
import img7 from './assets/img/img7.jpg';
import img8 from './assets/img/img8.jpg';
import img9 from './assets/img/img9.jpg';
import img10 from './assets/img/img10.jpg';
import img11 from './assets/img/img11.jpg';
import img12 from './assets/img/img12.jpg';
import img13 from './assets/img/img13.jpg';
import img14 from './assets/img/img14.jpg';

//Jegyes

import img28 from './assets/img/img28.jpg';
import img29 from './assets/img/img29.jpg';
import img30 from './assets/img/img30.jpg';
import img31 from './assets/img/img31.jpg';
import img32 from './assets/img/img32.jpg';
import img33 from './assets/img/img33.jpg';
import img34 from './assets/img/img34.jpg';
import img35 from './assets/img/img35.jpg';
import img36 from './assets/img/img36.jpg';

import img38 from './assets/img/img38.jpg';
import img39 from './assets/img/img39.jpg';
import img40 from './assets/img/img40.jpg';

export const MovieState = () => {
  const galleryImages = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
  ];
  const galleryImages2 = [
    { id: 28, imgSrc: img28 },
    { id: 29, imgSrc: img29 },
    { id: 30, imgSrc: img30 },
    { id: 31, imgSrc: img31 },
    { id: 32, imgSrc: img32 },
    { id: 33, imgSrc: img33 },
    { id: 34, imgSrc: img34 },
    { id: 35, imgSrc: img35 },
    { id: 36, imgSrc: img36 },
    { id: 38, imgSrc: img38 },
    { id: 39, imgSrc: img39 },
    { id: 40, imgSrc: img40 },
  ];

  return [
    {
      title: 'The Athlete',
      mainImg: img1,
      secondaryImg: img2,
      url: '/projects/eljegyzes',
      galleryImages: galleryImages,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },

    {
      title: 'Good Times',
      mainImg: img3,
      url: '/projects/eskuvo',
      secondaryImg: img2,
      galleryImages: galleryImages2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Racer',
      mainImg: img1,
      galleryImages: galleryImages,
      url: '/projects/parok',
      secondaryImg: img2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
