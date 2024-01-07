import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../hero-slider/Wrapper";
import Title from "../hero-slider/Title";
import Subtitle from "../hero-slider/Subtitle";
import { Link } from "react-router-dom";
// import banner1 from '../../assets/images/banner1.jpg'
const bogliasco =

  // "https://imgst.localcircle.in/Wilsh+and+Harvi/web+images/banner-1.jpg ";
  "https://imgst.localcircle.in/Wilsh+and+Harvi/web+images/banner3.jpg";
// const countyClare =
//   "https://digitalagencynetwork.com/wp-content/uploads/2018/09/digital-marketing-articles-digital-campaigns.jpg";
// const craterRock =
//   "https://digitalagencynetwork.com/wp-content/uploads/2018/09/digital-marketing-articles-digital-campaigns.jpg";
const giauPass =
  "https://imgst.localcircle.in/Wilsh+and+Harvi/web+images/banner2+(2).jpg";
  // "https://imgst.localcircle.in/Wilsh+and+Harvi/web+images/banner3.jpg";


export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 0,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title className="text-white"><blockquote id="content1">Utilize The Affordable <br /> Digital Services </blockquote></Title>
          {/* <Subtitle id="content2">
            Our expert team can help you in developing most cost effective and
            easy to use customized software.
          </Subtitle>  */}
          <div id="btn1"className="btn-box">
                <Link to="/ContactUs"></Link>
            <a href="/ContactUs" id="btn0"className="theme-btn style-two">WORK WITH US</a>
            <Link to="/ContactUS"></Link>
            <a href="/ContactUS" id="btn2"className="theme-btn style-two">PORTFOLIO</a>

            <Link to="services" className="text-white mt-2 ">
              {/* Services */}
            </Link>
          </div>
        </Wrapper>
      </Overlay>

      <Slide
        // shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass,
          opacity: 0.6,
        }}
      />

      <Slide
        // shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco,
          opacity: 0.6,
        }}
      />

      {/* <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock,
        }}
      /> */}
        <div className="black-overlay"></div>

      <MenuNav />
    </HeroSlider>
  );
}

