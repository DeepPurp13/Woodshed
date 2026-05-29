import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import PinnedSection from "@/components/animations/PinnedSection";
import { Link } from "react-router-dom";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
  CommonScrollAnimatedLink,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import MxdImgAnim from "@/components/animations/MxdImgAnim";
export default function ProjectsGrid() {
  return (
    <>
      <PinnedSection blurSection className="mxd-section padding-bottom-default">
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            {/* Block - Projects Grid x2 Showcase Start */}
            <div className="mxd-block">
              <div className="mxd-projects-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-projects-grid__gallery">
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-2 mxd-project-item-s mxd-project-item-sticky"
                      as="div"
                      columns={2}
                    >
                      <Link
                        className="mxd-project-item__media active-cursor-permanent"
                        data-cursor-text="View Work"
                        to={`/project-details`}
                      >
                        <MxdImgAnim
                          main={
                            <img className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-01.webp"
                              width={1280}
                              height={722} loading="lazy" />
                          }
                          absolutes={[
                            <img key="pr01-02"
                              className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-02.webp"
                              width={1280}
                              height={722} loading="lazy" />,
                            <img key="pr01-03"
                              className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-03.webp"
                              width={1280}
                              height={722} loading="lazy" />,
                            <img key="pr01-04"
                              className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-04.webp"
                              width={1280}
                              height={722} loading="lazy" />,
                            <img key="pr01-05"
                              className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-05.webp"
                              width={1280}
                              height={722} loading="lazy" />,
                            <img key="pr01-06"
                              className="centered-y"
                              alt="Project Preview Image"
                              src="/img/works/showcase-sticky/pr01-06.webp"
                              width={1280}
                              height={722} loading="lazy" />,
                          ]}
                        >
                          <div className="mxd-cover mxd-cover-06" />
                          <div className="mxd-project-item__logowrap">
                            <img alt="Client's Logo"
                              src="/img/works/showcase-sticky/clients/01.svg"
                              width={370}
                              height={67} loading="lazy" />
                          </div>
                        </MxdImgAnim>
                      </Link>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <Link
                            className="project-name-s"
                            to={`/project-details`}
                          >
                            Interactive concept
                          </Link>
                        </div>
                        <div className="mxd-project-item__tags">
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            UI/UX
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Development
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Brand
                          </TextScramble>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                    <div className="col-12 col-xl-1 mxd-project-divider" />
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-7 mxd-project-item animate-card-2"
                      as="div"
                      columns={2}
                    >
                      <Link
                        className="mxd-project-item__media active-cursor-permanent"
                        data-cursor-text="View Work"
                        to={`/project-details`}
                      >
                        <img alt="Project Preview Image"
                          src="/img/works/showcase-sticky/pr02-01.webp"
                          width={1500}
                          height={1000} loading="lazy" />
                        <div className="mxd-cover mxd-cover-06" />
                        <div className="mxd-project-item__logowrap">
                          <img alt="Client's Logo"
                            src="/img/works/showcase-sticky/clients/02.svg"
                            width={393}
                            height={49} loading="lazy" />
                        </div>
                        <div className="mxd-project-item__videowrap">
                          <AutoplayLoopVideo
                            className="mxd-project-item__video"
                            poster="video/640x360_stone-geometry-banner.webp"
                            sources={[
                              {
                                type: "video/mp4",
                                src: "video/640x360_stone-geometry.mp4",
                              },
                              {
                                type: "video/webm",
                                src: "video/640x360_stone-geometry.webm",
                              },
                            ]} />
                        </div>
                      </Link>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <Link
                            className="project-name-s"
                            to={`/project-details`}
                          >
                            Creative studio template
                          </Link>
                        </div>
                        <div className="mxd-project-item__tags">
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Brand
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Marketing
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Website
                          </TextScramble>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                  </div>
                  <div className="row g-0 mxd-projects-grid__gallery">
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-7 mxd-project-item animate-card-2"
                      as="div"
                      columns={2}
                    >
                      <Link
                        className="mxd-project-item__media active-cursor-permanent"
                        data-cursor-text="View Work"
                        to={`/project-details`}
                      >
                        <img alt="Project Preview Image"
                          src="/img/works/showcase-sticky/pr03-01.webp"
                          width={1500}
                          height={1125} loading="lazy" />
                        <div className="mxd-cover mxd-cover-03" />
                        <div className="mxd-project-item__logowrap">
                          <img alt="Client's Logo"
                            src="/img/works/showcase-sticky/clients/03.svg"
                            width={300}
                            height={216} loading="lazy" />
                        </div>
                        <div className="mxd-project-item__videowrap">
                          <AutoplayLoopVideo
                            className="mxd-project-item__video"
                            poster="video/640x360_bw-geometry-banner.webp"
                            sources={[
                              {
                                type: "video/mp4",
                                src: "video/640x360_bw-geometry.mp4",
                              },
                              {
                                type: "video/webm",
                                src: "video/640x360_bw-geometry.webm",
                              },
                            ]} />
                        </div>
                      </Link>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <Link
                            className="project-name-s"
                            to={`/project-details`}
                          >
                            Creative studio template
                          </Link>
                        </div>
                        <div className="mxd-project-item__tags">
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Brand
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Marketing
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Website
                          </TextScramble>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                    <div className="col-12 col-xl-1 mxd-project-divider" />
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-2 mxd-project-item-s mxd-project-item-sticky"
                      as="div"
                      columns={2}
                    >
                      <Link
                        className="mxd-project-item__media active-cursor-permanent"
                        data-cursor-text="View Work"
                        to={`/project-details`}
                      >
                        <MxdImgAnim
                          main={
                            <img alt="Project Preview Image"
                              src="/img/works/showcase-grid-x3/pr02-01.webp"
                              width={1280}
                              height={843} loading="lazy" />
                          }
                          absolutes={[
                            <img key="pr02-04"
                              alt="Project Preview Image"
                              src="/img/works/showcase-grid-x3/pr02-04.webp"
                              width={1280}
                              height={843} loading="lazy" />,
                            <img key="pr02-05"
                              alt="Project Preview Image"
                              src="/img/works/showcase-grid-x3/pr02-05.webp"
                              width={1280}
                              height={843} loading="lazy" />,
                            <img key="pr02-03"
                              alt="Project Preview Image"
                              src="/img/works/showcase-grid-x3/pr02-03.webp"
                              width={1280}
                              height={843} loading="lazy" />,
                            <img key="pr02-02"
                              alt="Project Preview Image"
                              src="/img/works/showcase-grid-x3/pr02-02.webp"
                              width={1280}
                              height={843} loading="lazy" />,
                          ]}
                        >
                          <div className="mxd-cover mxd-cover-03" />
                          <div className="mxd-project-item__logowrap">
                            <img alt="Client's Logo"
                              src="/img/works/showcase-sticky/clients/04.svg"
                              width={376}
                              height={29} loading="lazy" />
                          </div>
                        </MxdImgAnim>
                      </Link>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <Link
                            className="project-name-s"
                            to={`/project-details`}
                          >
                            Interactive concept
                          </Link>
                        </div>
                        <div className="mxd-project-item__tags">
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            UI/UX
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Development
                          </TextScramble>
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            Brand
                          </TextScramble>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                  </div>
                  <div className="row g-0">
                    {/* all projects link */}
                    <div className="mxd-object-link">
                      <div className="container-fluid p-0">
                        <div className="row g-0 mxd-object-link__wrap">
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-start">
                            <CommonScrollAnimated
                              className="mxd-object-link__object mxd-slide-object"
                              as="div"
                              animation="slideObject"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 259 260"
                              >
                                <path d="M143.9,0v28.8h-28.8V0h28.8ZM143.9,28.8v28.8h28.8v-28.8h-28.8ZM172.7,57.6v28.8h28.8v-28.8h-28.8ZM230.2,115.2v-28.8h-28.8v28.8H0v28.8h201.4v28.8h28.8v-28.8h28.8v-28.8h-28.8ZM172.7,201.6h28.8v-28.8h-28.8v28.8ZM143.9,230.4h28.8v-28.8h-28.8v28.8ZM114.3,260h28.8v-28.8h-28.8v28.8Z" />
                              </svg>
                              {/* <img alt="Azurio Image"    src="/img/cursor-trail-transparent/07_trail.webp" width="400" height="480" loading="lazy" /> */}
                            </CommonScrollAnimated>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-end">
                            <div className="mxd-object-link__content">
                              <CommonScrollAnimated
                                className="mxd-object-link__btnholder anim-uni-in-up"
                                as="div"
                                animation="inUp"
                              >
                                <Link
                                  className="btn btn-line btn-line-default"
                                  to={`/works-default`}
                                >
                                  <TextScramble className="btn-caption mxd-scramble">
                                    All Works
                                  </TextScramble>
                                </Link>
                              </CommonScrollAnimated>
                              <CommonScrollAnimatedLink
                                className="mxd-object-link__media active-cursor-permanent anim-uni-in-up"
                                data-cursor-text="All Works"
                                to="/works-default"
                                animation="inUp"
                              >
                                <MxdImgAnim
                                  main={
                                    <img className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all03.webp"
                                      width={800}
                                      height={450} loading="lazy" />
                                  }
                                  absolutes={[
                                    <img key="all02"
                                      className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all02.webp"
                                      width={800}
                                      height={450} loading="lazy" />,
                                    <img key="all01"
                                      className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all01.webp"
                                      width={800}
                                      height={450} loading="lazy" />,
                                    <img key="all04"
                                      className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all04.webp"
                                      width={800}
                                      height={450} loading="lazy" />,
                                    <img key="all05"
                                      className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all05.webp"
                                      width={800}
                                      height={450} loading="lazy" />,
                                    <img key="all06"
                                      className="centered-y"
                                      alt="Project Preview Image"
                                      src="/img/works/800x450_all06.webp"
                                      width={800}
                                      height={450} loading="lazy" />,
                                  ]} />
                              </CommonScrollAnimatedLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Projects Grid x2 Showcase End */}
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
