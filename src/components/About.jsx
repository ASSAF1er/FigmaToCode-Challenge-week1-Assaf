import whatsapp from "../assets/whatsapp.svg";
import doctor_photo from "../assets/doctor_photo.jpeg";
import { useRef, useState } from "react";
import classNames from "classnames";
function About() {
  const about = useRef(null);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > window.innerHeight) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  window.addEventListener("scroll", handleScrollTop);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center md:gap-[124px] md:w-full pb-[50px] md:pb-0 md:h-screen px-[10%] bg-[#F9FBFC] "
    >
      <div className="md:w-1/2 pb-[30px] md:pb-0 ">
        <img
          src={doctor_photo}
          alt=""
          className="w-[486px] h-[300px] md:h-[405px] object-cover rounded-[32px] "
        />
      </div>
      <div className="flex flex-col gap-[30px] md:gap-[14px] md:w-1/2  ">
        <p className="text-[22px] text-[#00BFA5] ">About me </p>
        <p className="text-[32px] font-bold text-[#031432] ">
          A dedicated doctor with the cor mission to help
        </p>
        <p className="text-[16px] text-[#6C87AE] ">
          rem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh
          cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="flex gap-[10px] w-auto py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
            <img src={whatsapp} alt="" className="w-[24px] h-[24px] " />{" "}
            <span>Book an Appoinment</span>
          </button>
        </div>
      </div>
      {scrollTop && (
        <div
          onClick={scrollToTop}
          className={classNames(
            " fixed z-[200] bottom-5 right-5 animate-bounce hover:animate-none flex items-center justify-center rounded-full shadow-xl p-3 md:p-4 cursor-pointer bg-white hover:bg-gray-100",
          )}
        >
          <span className="material-icons text-blue-500">north</span>
        </div>
      )}
    </div>
  );
}

export default About;
