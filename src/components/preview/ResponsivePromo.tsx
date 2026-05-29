import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { initCtaMarqueeToRight } from "@/lib/template/ctaMarqueeEffects";
import { useLayoutEffect, useRef } from "react";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";

const RESP_PROMO_DEVICE_ROWS = [
  { iconClass: "ph-thin ph-device-mobile-camera", caption: "Phone" },
  { iconClass: "ph-thin ph-device-tablet-camera", caption: "Tablet" },
  { iconClass: "ph-thin ph-laptop", caption: "Laptop" },
  { iconClass: "ph-thin ph-desktop", caption: "Desktop" },
] as const;

const RESP_PROMO_MARQUEE_LINES = Array.from({ length: 6 }, (_, i) =>
  i % 2 === 0 ? "Inner/" : "Pages/",
);

export default function ResponsivePromo() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    return initCtaMarqueeToRight(marqueeTrackRef.current);
  }, []);
  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - Responsive Promo Start */}
          <div className="mxd-block">
            <div className="mxd-resp-promo">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* left side */}
                  <div className="col-12 col-xl-6 mxd-resp-promo__item">
                    <div className="mxd-container grid-l-container">
                      <div className="mxd-block mxd-grid-item no-margin">
                        <div className="mxd-resp-promo__content">
                          <CommonScrollAnimated
                            className="mxd-resp-promo__manifest anim-uni-in-up"
                            as="div"
                            animation="inUp"
                          >
                            <CommonAnimatedText
                              as="p"
                              className="mxd-split-lines"
                              animation="splitLines"
                            >
                              Fully responsive and pixel-perfect Rayo looks
                              great on any device.
                              <span>
                                Your site stays stunning and functional
                                everywhere.
                              </span>
                            </CommonAnimatedText>
                          </CommonScrollAnimated>
                          <div className="mxd-demo-cards__icons">
                            {RESP_PROMO_DEVICE_ROWS.map((row) => (
                              <CommonCardBatchAnimated
                                key={row.caption}
                                className="demo-icons__item animate-card-4"
                                as="div"
                                columns={4}
                              >
                                <div className="demo-icons__icon transparent">
                                  <i className={row.iconClass} />
                                </div>
                                <p className="demo-icons__caption">{row.caption}</p>
                              </CommonCardBatchAnimated>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right side (media) */}
                  <div className="col-12 col-xl-6 mxd-resp-promo__item">
                    <CommonScrollAnimated
                      className="mxd-resp-promo__image anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <img alt="Rayo Image"
                        src="/img/demo/01_resp-img.webp"
                        width={1200}
                        height={767} loading="lazy" />
                    </CommonScrollAnimated>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Responsive Promo End */}
        </div>
        <div className="mxd-container fullwidth-container">
          {/* Block - Marquee Text One Line Start */}
          <div className="mxd-block">
            <div className="mxd-demo-marquee-02">
              {/* Marquee Divider Start */}
              <div className="marquee marquee-stack marquee-right--gsap muted">
                <div className="marquee__toright" ref={marqueeTrackRef}>
                  {RESP_PROMO_MARQUEE_LINES.map((line, i) => (
                    <div
                      key={`${line}-${i}`}
                      className="marquee__item item-regular text"
                    >
                      <p className="marquee__text text-with-gliph">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Marquee Divider End */}
            </div>
          </div>
          {/* Block - Marquee Text One Line End */}
        </div>
      </BlurSection>
    </>
  );
}
