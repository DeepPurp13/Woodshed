import BlurSection from "@/components/animations/BlurSection";
import { initCtaMarqueeToRight } from "@/lib/template/ctaMarqueeEffects";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { demoGridItems, demoGridMarqueeTexts } from "@/data/demoGrid";
export default function DemoGrid() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    return initCtaMarqueeToRight(marqueeTrackRef.current);
  }, []);
  return (
    <CommonLoadAnimation>
      <>
        <BlurSection id="demo" className="mxd-section">
          <div className="mxd-container grid-l-container">
            {/* Block - Demo Grid x2 Showcase Start */}
            <div className="mxd-block">
              <CommonLoadFade index={0}>
                <div className="mxd-demo-grid loading-fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0 mxd-demo-grid__gallery">
                      {demoGridItems.map((item) => (
                        <CommonCardBatchAnimated
                          key={item.to}
                          className="col-12 col-md-6 mxd-demo-grid__item mxd-grid-item animate-card-2"
                          as="div"
                          columns={2}
                        >
                          <Link
                            className="mxd-demo-grid__image active-cursor-permanent"
                            data-cursor-text="View Demo"
                            to={item.to}
                            {...(item.imageTargetBlank
                              ? { target: "_blank" as const }
                              : {})}
                          >
                            <img
                              alt="Azurio Template Preview Image"
                              src={item.imageSrc}
                              width={900}
                              height={563}
                              loading="lazy"
                            />
                            <div
                              className={`mxd-demo-grid__screen ${item.screenClass}`}
                            />
                          </Link>
                          <div className="mxd-demo-grid__caption">
                            <div className="mxd-demo-grid__name">
                              <Link
                                className="project-name-s"
                                to={item.to}
                                {...(item.titleTargetBlank
                                  ? { target: "_blank" as const }
                                  : {})}
                              >
                                {item.title}
                              </Link>
                            </div>
                            <div className="mxd-demo-grid__tags">
                              {item.tags.map((tag) => (
                                <TextScramble
                                  key={tag}
                                  className="tag tag-s tag-medium mxd-scramble"
                                >
                                  {tag}
                                </TextScramble>
                              ))}
                            </div>
                          </div>
                        </CommonCardBatchAnimated>
                      ))}
                    </div>
                  </div>
                </div>
              </CommonLoadFade>
            </div>
            {/* Block - Demo Grid x2 Showcase End */}
          </div>

          <div className="mxd-container fullwidth-container">
            {/* Block - Marquee Text One Line Start */}
            <div className="mxd-block">
              <div className="mxd-demo-marquee-01">
                {/* Marquee Divider Start */}
                <div className="marquee marquee-stack marquee-right--gsap muted">
                  <div className="marquee__toright" ref={marqueeTrackRef}>
                    {demoGridMarqueeTexts.map((text, i) => (
                      <div
                        key={`${text}-${i}`}
                        className="marquee__item item-regular text"
                      >
                        <p className="marquee__text text-with-gliph">{text}</p>
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
    </CommonLoadAnimation>
  );
}
