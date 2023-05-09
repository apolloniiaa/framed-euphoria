import ImageSlider from '../components/ImageSlider';

const Project = () => {
  const slides = [
    {
      url: 'https://images.pexels.com/photos/14434029/pexels-photo-14434029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
    {
      url: 'https://images.pexels.com/photos/14434090/pexels-photo-14434090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
    {
      url: 'https://images.pexels.com/photos/14434029/pexels-photo-14434029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
    {
      url: 'https://images.pexels.com/photos/14434029/pexels-photo-14434029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
    {
      url: 'https://images.pexels.com/photos/14434029/pexels-photo-14434029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
    {
      url: 'https://images.pexels.com/photos/14434029/pexels-photo-14434029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'beach',
    },
  ];

  const containerStyles = {
    width: '50rem',
    height: '28rem',
    margin: '0 auto',
  };

  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Project;
