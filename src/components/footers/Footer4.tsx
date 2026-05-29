import BlurSection from "@/components/animations/BlurSection";

import CommonAnimatedText from "../animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import FooterBackToTop from "@/components/footers/FooterBackToTop";
import {
  CommonScrollAnimated,
  CommonScrollAnimatedLink,
} from "@/components/animations/CommonScrollAnimated";
import {
  footer4DiscoverLinks,
  footerNavInfoLinks,
  footerStaticContactEntries,
} from "@/data/footerNavVariants";

export default function Footer4() {
  return (
    <BlurSection as="footer" className="mxd-footer">
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Navigation v2 Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item">
                <nav className="mxd-footer__nav02">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <CommonScrollAnimated
                              className="footer-data anim-uni-slide-down"
                              as="p"
                              animation="slideDownLine"
                            >
                              <span>/ Discover</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              {footer4DiscoverLinks.map((link) => (
                                <li key={link.to}>
                                  <CommonScrollAnimatedLink
                                    className="anim-uni-slide-down"
                                    to={link.to}
                                    animation="slideDownLine"
                                  >
                                    <span>{link.label}</span>
                                  </CommonScrollAnimatedLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <CommonScrollAnimated
                              className="footer-data anim-uni-slide-down"
                              as="p"
                              animation="slideDownLine"
                            >
                              <span>/ Contact</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              {footerStaticContactEntries.map((entry) => (
                                <li key={entry.href}>
                                  <CommonScrollAnimated
                                    className="anim-uni-slide-down"
                                    href={entry.href}
                                    as="a"
                                    animation="slideDownLine"
                                  >
                                    <span>{entry.label}</span>
                                  </CommonScrollAnimated>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <CommonScrollAnimated
                              className="footer-data anim-uni-slide-down"
                              as="p"
                              animation="slideDownLine"
                            >
                              <span>/ Info</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              {footerNavInfoLinks.map((link) => (
                                <li key={link.to}>
                                  <CommonScrollAnimatedLink
                                    className="anim-uni-slide-down"
                                    to={link.to}
                                    animation="slideDownLine"
                                  >
                                    <span>{link.label}</span>
                                  </CommonScrollAnimatedLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__socials-list">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-footer-nav02__item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <CommonScrollAnimated
                              className="footer-data anim-uni-slide-down"
                              as="p"
                              animation="slideDownLine"
                            >
                              <span>/ Ecosystem</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <a
                              className="socials-list__item slide-right-up"
                              href="https://dribbble.com/"
                              target="_blank"
                            >
                              <CommonScrollAnimated
                                className="socials-list__divider divider-top anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                              <div className="socials-list__info">
                                <CommonScrollAnimated
                                  className="socials-list__number anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>[01]</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="socials-list__name anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>Dribbble</span>
                                </CommonScrollAnimated>
                              </div>
                              <CommonScrollAnimated
                                className="socials-list__arrow anim-uni-slide-down"
                                as="div"
                                animation="slideDownLine"
                              >
                                <i>
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 18 18"
                                    enableBackground="new 0 0 18 18"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                                M0,18h3.6v-3.6H0V18z" />
                                  </svg>
                                </i>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="socials-list__divider divider-bottom anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                            </a>
                            <a
                              className="socials-list__item slide-right-up"
                              href="https://www.behance.net/"
                              target="_blank"
                            >
                              <CommonScrollAnimated
                                className="socials-list__divider divider-top anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                              <div className="socials-list__info">
                                <CommonScrollAnimated
                                  className="socials-list__number anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>[02]</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="socials-list__name anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>Behance</span>
                                </CommonScrollAnimated>
                              </div>
                              <CommonScrollAnimated
                                className="socials-list__arrow anim-uni-slide-down"
                                as="div"
                                animation="slideDownLine"
                              >
                                <i>
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 18 18"
                                    enableBackground="new 0 0 18 18"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                                M0,18h3.6v-3.6H0V18z" />
                                  </svg>
                                </i>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="socials-list__divider divider-bottom anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                            </a>
                            <a
                              className="socials-list__item slide-right-up"
                              href="https://github.com/"
                              target="_blank"
                            >
                              <CommonScrollAnimated
                                className="socials-list__divider divider-top anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                              <div className="socials-list__info">
                                <CommonScrollAnimated
                                  className="socials-list__number anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>[03]</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="socials-list__name anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>Github</span>
                                </CommonScrollAnimated>
                              </div>
                              <CommonScrollAnimated
                                className="socials-list__arrow anim-uni-slide-down"
                                as="div"
                                animation="slideDownLine"
                              >
                                <i>
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 18 18"
                                    enableBackground="new 0 0 18 18"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                                M0,18h3.6v-3.6H0V18z" />
                                  </svg>
                                </i>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="socials-list__divider divider-bottom anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                            </a>
                            <a
                              className="socials-list__item slide-right-up"
                              href="https://codepen.io/"
                              target="_blank"
                            >
                              <CommonScrollAnimated
                                className="socials-list__divider divider-top anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                              <div className="socials-list__info">
                                <CommonScrollAnimated
                                  className="socials-list__number anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>[04]</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="socials-list__name anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>Codepen</span>
                                </CommonScrollAnimated>
                              </div>
                              <CommonScrollAnimated
                                className="socials-list__arrow anim-uni-slide-down"
                                as="div"
                                animation="slideDownLine"
                              >
                                <i>
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 18 18"
                                    enableBackground="new 0 0 18 18"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                                M0,18h3.6v-3.6H0V18z" />
                                  </svg>
                                </i>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="socials-list__divider divider-bottom anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                            </a>
                            <a
                              className="socials-list__item slide-right-up"
                              href="https://www.figma.com/community"
                              target="_blank"
                            >
                              <CommonScrollAnimated
                                className="socials-list__divider divider-top anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                              <div className="socials-list__info">
                                <CommonScrollAnimated
                                  className="socials-list__number anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>[05]</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="socials-list__name anim-uni-slide-down"
                                  as="div"
                                  animation="slideDownLine"
                                >
                                  <span>Figma Community</span>
                                </CommonScrollAnimated>
                              </div>
                              <CommonScrollAnimated
                                className="socials-list__arrow anim-uni-slide-down"
                                as="div"
                                animation="slideDownLine"
                              >
                                <i>
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 18 18"
                                    enableBackground="new 0 0 18 18"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                                M0,18h3.6v-3.6H0V18z" />
                                  </svg>
                                </i>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="socials-list__divider divider-bottom anim-uni-clip-in"
                                as="div"
                                animation="clipIn" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Navigation v2 End */}
        {/* Footer Block - Controls Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item" />
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__controls-middle">
                  <CommonScrollAnimated
                    className="anim-uni-slide-down"
                    as="div"
                    animation="slideDownLine"
                  >
                    <FooterBackToTop />
                  </CommonScrollAnimated>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Controls End */}
        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <div className="fw-mark__wrap">
              <div className="fw-mark__content">
                <CommonAnimatedText
                  as="span"
                  className="anim-uni-chars"
                  animation="animChars"
                >
                  Walker
                </CommonAnimatedText>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}
        {/* Footer Block - Data Start */}
        <div className="mxd-block">
          <div className="mxd-footer__data">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                  <CommonScrollAnimated
                    className="mxd-footer__data-item anim-uni-fade-in"
                    as="div"
                    animation="fadeIn"
                  >
                    <p className="footer-data">
                      <span>Copyright Azurio. All rights reserved</span>
                    </p>
                  </CommonScrollAnimated>
                </div>
                <div className="col-12 col-xl-6 mxd-footer__item">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <CommonScrollAnimated
                          className="mxd-footer__data-item anim-uni-fade-in"
                          as="div"
                          animation="fadeIn"
                        >
                          <p className="footer-data">
                            <span>
                              React.Js Template by&nbsp;
                              <a
                                href="https://themeforest.net/item/azurio-digital-agency-portfolio-react-js-template/63220747"
                                target="_blank"
                              >
                                <TextScramble className="mxd-scramble">
                                  IB Themes
                                </TextScramble>
                              </a>
                            </span>
                          </p>
                        </CommonScrollAnimated>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <CommonScrollAnimated
                          className="mxd-footer__data-item anim-uni-fade-in justify-end"
                          as="div"
                          animation="fadeIn"
                        >
                          <p className="footer-data">
                            <span>©{new Date().getFullYear()}</span>
                          </p>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Data End */}
      </div>
    </BlurSection>
  );
}
