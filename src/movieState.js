//PAROK
import img1 from './assets/img/img14-md.jpg';
import img2 from './assets/img/img44-md.jpg';
import img3 from './assets/img/img11-md.jpg';
import img4 from './assets/img/img28-md.jpg';
import img5 from './assets/img/img48-md.jpg';
import img26 from './assets/img/paros-banner.jpg';

//jegyes
import img9 from './assets/img/img8-md.jpg';
import img10 from './assets/img/img29-md.jpg';
import img11 from './assets/img/img4-md.jpg';

//eskuvo
import img17 from './assets/img/img12-md.jpg';
import img18 from './assets/img/img27-md.jpg';
import img19 from './assets/img/img3-md.jpg';
import img20 from './assets/img/img26-md.jpg';
import img21 from './assets/img/img1-md.jpg';
import img22 from './assets/img/img40-md.jpg';
import img23 from './assets/img/img23-md.jpg';
import img24 from './assets/img/img24-md.jpg';
import img25 from './assets/img/img15-md.jpg';

export const MovieState = () => {
  const galleryImages = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
  ];

  const galleryImages2 = [
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
  ];

  const galleryImages3 = [
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
    { id: 21, imgSrc: img21 },
    { id: 22, imgSrc: img22 },
    { id: 23, imgSrc: img23 },
    { id: 24, imgSrc: img24 },
    { id: 25, imgSrc: img25 },
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
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on',
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
      title: 'jegyes',
      mainImg: img2,
      url: '/projects/eljegyzes',
      secondaryImg: img1,
      galleryImages: galleryImages2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look ',
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
      title: 'Párok',
      mainImg: img26,
      galleryImages: galleryImages,
      url: '/projects/parok',
      secondaryImg: img3,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on ',
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
