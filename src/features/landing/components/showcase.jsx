import showcaseImg from '../../../assets/images/showcase_img.png';
export function Showcase() {
  return (
    <div className="container mx-auto px-4">
      <div className="block md:flex text-[#1F1F1F] items-center md:h-[40vh] py-10 md:space-x-20">
        <div className="md:basis-1/4">
          <h1 className="text-5xl font-extrabold">
            All <br /> Coffee
          </h1>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Embark on a Coffee Journey</h2>
          <p className="text-xl ">
            Embark on a Coffee Journey: From the Bright and Invigorating <br />{' '}
            Sunrise Blends to the Deep and Enigmatic Midnight Roasts,
          </p>
          <p className="text-xl ">
            Discover the Perfect Brew: From Sunrise to Midnight, Explore Our{' '}
            <br />
            Unique Coffee Roasts.
          </p>
        </div>
      </div>
      <div className="hidden md:block rounded-lg overflow-hidden">
        <img src={showcaseImg} />
      </div>
    </div>
  );
}
