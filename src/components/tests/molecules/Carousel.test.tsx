import Carousel from '@/components/molecules/Carousel';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Carousel', () => {
  const items = [
    {
      link: 'asd',
      bannerImage:
        'https://babylon-web.s3.amazonaws.com/banner/3626df3a-1be0-4a45-88b6-5acb63dea551_KakaoTalk_Photo_2022-12-09-10-28-58.jpeg',
    },
    {
      link: 'asd',
      bannerImage:
        'https://babylon-web.s3.amazonaws.com/banner/cb5dabb3-ff75-4bc3-aec7-32804d9224e7_muhammad-asyfaul-m-UvdXKnf7I-unsplash.jpg',
    },
  ];

  it('renders the first item initially', () => {
    render(<Carousel items={items} renderKey="bannerImage" />);
    const firstItem = screen.getByAltText(items[0].bannerImage);
    expect(firstItem).toBeInTheDocument();
  });
});
