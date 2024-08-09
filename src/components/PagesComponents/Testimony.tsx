// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import Components
import Card from './TestimonyCard';

// Import Images
import client from '../../../public/Images/client.png';
import client1 from '../../../public/Images/client1.png';
import client2 from '../../../public/Images/client2.png';
import client3 from '../../../public/Images/client3.png';
import client4 from '../../../public/Images/client4.png';
import client5 from '../../../public/Images/client5.png';
import client6 from '../../../public/Images/client6.png';

const testimonies = [
  {
    imageUrl: client,
    name: 'Ethan Carter',
    statement: "Untill now they are doing great, fast transactions, reliable.. they are totally different from worthless platforms like cex.io and others, keep good work!",
  },
  {
    imageUrl: client1,
    name: 'Marcus Holloway',
    statement: 'Super service, never had an issue with them. The best exchange platform around for me.',
  },
  {
    imageUrl: client2,
    name: 'Daniel Reeves',
    statement: 'Its great, easy to use. quick money transfers. Easy to withdraw money also. Very low fees compared to other brokers. very satisfied.',
  },
  {
    imageUrl: client3,
    name: 'Liam Donovan',
    statement: "It's fast, it's working, I didn't notice any downtime. Crypto transfers into Wealth assets were available immediately, right after confirmations on the Blockchain.",
  },
  {
    imageUrl: client4,
    name: 'Sophie Blackwood',
    statement: 'It has a wide variety of coins, and works as advertised. The ID verification was very quick. Took some mins for my BTC deposit to get approved, but I guess that is on the network, not on them.',
  },
  {
    imageUrl: client5,
    name: 'Gabriel Moreno',
    statement: 'Great exchange website : instant transaction, easy deposit and withdrawal made easy, under 2 BTC withdrawal per day and most importantly you have many coins and tokens to choose from when you invest.',
  },
  {
    imageUrl: client6,
    name: 'Nicholas Chen',
    statement: "Great UI/UX, self-explanatory & FAST registration process. I'd love to see a greater choice of alt coins in the near future",
  },
];

export default function Testimony() {
  return (
    <div className="gradientYellowToPink py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
      <h1 className="font-semibold my-8 text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-center">
        What our <span className="text-yellow">clients</span> say...
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonies.map(({ imageUrl, name, statement }, index) => (
          <SwiperSlide key={index}>
            <Card ImageUrl={imageUrl} name={name} statement={statement} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
