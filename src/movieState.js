//PAROK
import img1 from './assets/img/img14-md.jpg';
import img2 from './assets/img/img44-md.jpg';
import img3 from './assets/img/img11-md.jpg';
import img4 from './assets/img/img28-md.jpg';
import img5 from './assets/img/img48-md.jpg';
import img6 from './assets/img/img38-md.jpg';
import img26 from './assets/img/paros-banner.jpg';
import img27 from './assets/img/img9-md.jpg';
import img40 from './assets/img/img43-md.jpg';
import img42 from './assets/img/img55-md.jpg';
import img43 from './assets/img/img56-md.jpg';
import img44 from './assets/img/img57-md.jpg';
import img45 from './assets/img/img47-md.jpg';

//jegyes
import img9 from './assets/img/img8-md.jpg';
import img10 from './assets/img/img29-md.jpg';
import img11 from './assets/img/img4-md.jpg';
import img12 from './assets/img/img6-md.jpg';
import img13 from './assets/img/img5-md.jpg';
import img14 from './assets/img/img28-md.jpg';
import img15 from './assets/img/img34-md.jpg';
import img16 from './assets/img/img35-md.jpg';
import img32 from './assets/img/img54-md.jpg';

//eskuvo
import img30 from './assets/img/14.jpg';
import img17 from './assets/img/img12-md.jpg';
import img18 from './assets/img/img27-md.jpg';
import img19 from './assets/img/img3-md.jpg';
import img20 from './assets/img/img26-md.jpg';
import img21 from './assets/img/img1-md.jpg';
import img22 from './assets/img/img40-md.jpg';
import img23 from './assets/img/img23-md.jpg';
import img24 from './assets/img/img24-md.jpg';
import img25 from './assets/img/img15-md.jpg';
import img28 from './assets/img/img15-md.jpg';
import img29 from './assets/img/img36-md.jpg';
import img31 from './assets/img/img20-md.jpg';
import img50 from './assets/img/img13-md.jpg';
import img51 from './assets/img/16.jpg';
import img52 from './assets/img/img53-md.jpg';
import img53 from './assets/img/13.jpg';
import img54 from './assets/img/15.jpg';

export const MovieState = () => {
  const galleryImages = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 9, imgSrc: img27 },
    { id: 40, imgSrc: img40 },
    { id: 42, imgSrc: img42 },
    { id: 43, imgSrc: img43 },
    { id: 44, imgSrc: img44 },
    { id: 45, imgSrc: img45 },
  ];

  const galleryImages2 = [
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 32, imgSrc: img32 },
  ];

  const galleryImages3 = [
    { id: 30, imgSrc: img30 },
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
    { id: 21, imgSrc: img21 },
    { id: 22, imgSrc: img22 },
    { id: 31, imgSrc: img31 },
    { id: 23, imgSrc: img23 },
    { id: 24, imgSrc: img24 },
    { id: 25, imgSrc: img25 },
    { id: 28, imgSrc: img28 },
    { id: 29, imgSrc: img29 },

    { id: 50, imgSrc: img50 },
    { id: 51, imgSrc: img51 },
    { id: 52, imgSrc: img52 },
    { id: 53, imgSrc: img53 },
    { id: 54, imgSrc: img54 },
  ];

  return [
    {
      title: 'Örök Pillanatok',
      mainImg: img23,
      secondaryImg: img23,
      url: '/projects/eskuvo',
      galleryImages: galleryImages3,
      awards: [
        {
          // title: 'Truly A masterpiece',
          // description:
          //   '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          // title: 'Fresh look on',
          // description:
          //   '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          // title: 'It’s okay lmao.',
          // description:
          //   '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },

    {
      title: 'Jegyes fotózás varázsa',
      mainImg: img2,
      url: '/projects/eljegyzes',
      secondaryImg: img1,
      galleryImages: galleryImages2,
      awards: [
        // {
        //   title: 'Truly A masterpiece',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
        // {
        //   title: 'Fresh look ',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
        // {
        //   title: 'It’s okay lmao.',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
      ],
    },
    {
      title: 'Páros fotók a boldog pillanatokról',
      mainImg: img26,
      galleryImages: galleryImages,
      url: '/projects/parok',
      secondaryImg: img3,
      awards: [
        // {
        //   title: 'Truly A masterpiece',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
        // {
        //   title: 'Fresh look on ',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
        // {
        //   title: 'It’s okay lmao.',
        //   description:
        //     '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        // },
      ],
    },
  ];
};
