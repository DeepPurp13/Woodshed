import BlurSection from "../animations/BlurSection";
import CommonAnimatedText from "../animations/CommonAnimatedText";
import "./Footer.css"
import {
  footer1BackgroundImages,
  footer1ForegroundImages,
} from "../data/footer";
import {
  CommonScrollAnimated
} from "../animations/CommonScrollAnimated";


const navLinkClass = "anim-uni-slide-down";

export default function Footer1() {
  return (
<BlurSection as="footer" className="mxd-demo-footer">

  {/* CLOUD BACKGROUND */}
  <div className="mxd-demo-footer__background">
    {footer1BackgroundImages.map((layer) => (
      <div key={layer.src} className={layer.wrapperClass}>
        <img
          alt={layer.alt}
          src={layer.src}
          width={layer.width}
          height={layer.height}
          loading="lazy"
        />
      </div>
    ))}
  </div>
    <div className="mxd-demo-footer__foreground">
    {footer1ForegroundImages.map((layer) => (
      <div key={layer.src} className={layer.wrapperClass}>
        <img
          alt={layer.alt}
          src={layer.src}
          width={layer.width}
          height={layer.height}
          loading="lazy"
        />
      </div>
    ))}
  </div>


  {/* IBTHEMES CENTER */}
  <div className="mxd-block">
    <div className="mxd-footer__fw-mark mxd-grid-item">

      <CommonScrollAnimated
        className="mxd-footer__planet01 anim-uni-in-up"
        as="div"
        animation="inUp"
      >
        <img
          className="mxd-move-slow"
          alt="Footer Decoration"
          src="/img/demo/planet-01.webp"
          width={400}
          height={404}
          loading="lazy"
        />
      </CommonScrollAnimated>


      <div className="fw-mark__wrap">
        <a
          className="fw-mark__content small justify-content-center"
          href="#"
        >
          <CommonAnimatedText
            as="span"
            className="anim-uni-chars"
            animation="animChars"
          >
            MOON VALLEY
          </CommonAnimatedText>
        </a>
      </div>


      <CommonScrollAnimated
        className="mxd-footer__planet02 anim-uni-in-up"
        as="div"
        animation="inUp"
      >
        <img
          className="mxd-move"
          alt="Footer Decoration"
          src="/img/demo/planet-02.webp"
          width={250}
          height={255}
          loading="lazy"
        />
      </CommonScrollAnimated>

    </div>
  </div>


  {/* CLOUD FOREGROUND */}
  <div className="mxd-demo-footer__foreground">
    {footer1ForegroundImages.map((layer) => (
      <div key={layer.src} className={layer.wrapperClass}>
        <img
          alt={layer.alt}
          src={layer.src}
          width={layer.width}
          height={layer.height}
          loading="lazy"
        />
      </div>
    ))}
  </div>

</BlurSection>
  );
}
