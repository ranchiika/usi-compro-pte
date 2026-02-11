import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative min-h-125">
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1 text-left md:pr-12 mb-10 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-medium text-primaryText mb-6 leading-tight">
              Be the part of USI, <br />
              Let's Join us!
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover the connections, opportunities, and resources you need to
              maximize your impact. Together with USI, we build a better
              tomorrow.
            </p>
            <Link href="/about#join-usi" passHref>
              <button className="py-3 px-8 bg-primaryOrange cursor-pointer text-white font-bold rounded-xl transition-colors hover:bg-primaryOrange-dark">
                Join Us
              </button>
            </Link>
          </div>
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
      <div className="absolute hidden md:block top-1/2 right-10 transform -translate-y-1/2 w-full md:w-[70%] lg:w-[60%] h-full max-h-150 z-0 pointer-events-none">
        <Image
          src="/home/joinus_home.png"
          alt="Kapal Kargo Besar"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          
          priority
        />
      </div>
    </section>
  );
};

export default JoinUs;
