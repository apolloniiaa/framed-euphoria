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
import img18 from './assets/img/img18.jpg';

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

//Wedding
import img41 from './assets/img/img41.jpg';
import img42 from './assets/img/img42.jpg';

import img45 from './assets/img/img45.jpg';
import img46 from './assets/img/img46.jpg';
import img47 from './assets/img/img47.jpg';
import img48 from './assets/img/img48.jpg';
import img49 from './assets/img/img49.jpg';
import img50 from './assets/img/img50.jpg';
import img51 from './assets/img/img51.jpg';
import img52 from './assets/img/img52.jpg';
import img53 from './assets/img/img53.jpg';
import img54 from './assets/img/img54.jpg';
import img55 from './assets/img/img55.jpg';
import img56 from './assets/img/img56.jpg';
import img57 from './assets/img/img57.jpg';
import img58 from './assets/img/img58.jpg';
import img59 from './assets/img/img59.jpg';
import img60 from './assets/img/img60.jpg';
import img61 from './assets/img/img61.jpg';
import img62 from './assets/img/img62.jpg';
import img63 from './assets/img/img63.jpg';
import img64 from './assets/img/img64.jpg';
import img65 from './assets/img/img65.jpg';
import img66 from './assets/img/img66.jpg';
import img67 from './assets/img/img67.jpg';
import img68 from './assets/img/img68.jpg';
import img72 from './assets/img/img72.jpg';

export const MovieState = () => {
  const galleryImages = [
    { id: 1, imgSrc: img1 },
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

  const galleryImages3 = [
    { id: 41, imgSrc: img41 },
    { id: 42, imgSrc: img42 },
    { id: 45, imgSrc: img45 },
    { id: 46, imgSrc: img46 },
    { id: 47, imgSrc: img47 },
    { id: 48, imgSrc: img48 },
    { id: 49, imgSrc: img49 },
    { id: 50, imgSrc: img50 },
    { id: 51, imgSrc: img51 },
    { id: 52, imgSrc: img52 },
    { id: 53, imgSrc: img53 },
    { id: 54, imgSrc: img54 },
    { id: 55, imgSrc: img55 },
    { id: 56, imgSrc: img56 },
    { id: 57, imgSrc: img57 },
    { id: 58, imgSrc: img58 },
    { id: 59, imgSrc: img59 },
    { id: 60, imgSrc: img60 },
    { id: 61, imgSrc: img61 },
    { id: 62, imgSrc: img62 },
    { id: 63, imgSrc: img63 },
    { id: 64, imgSrc: img64 },
    { id: 65, imgSrc: img65 },
    { id: 66, imgSrc: img66 },
    { id: 67, imgSrc: img67 },
    { id: 68, imgSrc: img68 },
  ];

  return [
    {
      title: 'Örök Pillanatok',
      mainImg: img67,
      secondaryImg: img65,
      url: '/projects/eljegyzes',
      galleryImages: galleryImages3,
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
      mainImg: img33,
      url: '/projects/eskuvo',
      secondaryImg: img28,
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
