// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
import heroImg from "../images/hero.png"

const Hero = () => {
  return (
    <section className="w-full bg-white">

      {/* Hero Container */}
      <div className="px-4 pt-5 sm:px-6 sm:pt-8 md:px-10 lg:px-[4.5%]">

        <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-2xl bg-[#F4F5F6] px-6 py-10 sm:rounded-3xl sm:px-10 sm:py-12 md:px-[5%] md:py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">

          {/* Left Content */}
          <div className="flex min-w-0 flex-col items-start gap-5 sm:gap-6">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#17191D] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#315BFF]" />
              New arrivals
            </span>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.8px] text-[#17191D] sm:text-[52px] sm:tracking-[-2px] md:text-[64px] lg:text-[68px] xl:text-[76px]">
              Power up your everyday tech.
            </h1>

            {/* Description */}
            <p className="max-w-[480px] text-base leading-relaxed text-[#4A4F58] sm:text-lg md:text-xl">
              Phones, laptops and the gadgets that go with them.
              Everything you need to stay charged, connected and ahead.
            </p>

            {/* Buttons */}
            {/* <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">

              <Link
                to="/phones"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-[#315BFF] px-7 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:h-14 sm:w-auto sm:text-[17px]"
              >
                Shop phones
                <ArrowRight size={20} strokeWidth={2.2} />
              </Link>

              <Link
                to="/laptops"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-7 text-base font-semibold text-[#17191D] transition-colors hover:bg-[#E4E6EA] sm:h-14 sm:w-auto sm:text-[17px]"
              >
                Browse laptops
              </Link>

            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative flex min-h-[260px] items-center justify-center sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">

            {/* Blue Circle */}
            <div className="absolute aspect-square w-[75%] max-w-[420px] rounded-full bg-[#315BFF]" />

            {/* Product Image */}
            <img
              src={heroImg}
              alt="Phones, laptops and gadgets"
              className="relative z-10 h-auto max-h-[300px] w-full max-w-[480px] object-contain sm:max-h-[380px] md:max-h-[430px] lg:max-h-[460px]"
            />

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;