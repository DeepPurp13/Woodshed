import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/projects/works-grid-sticky/InnerHeadline";
import ProjectsGridStickyShowcase from "@/components/projects/works-grid-sticky/ProjectsGridStickyShowcase";
import ParallaxDividerVideo from "@/components/projects/works-grid-sticky/ParallaxDividerVideo";
import ProjectsList from "@/components/projects/works-grid-sticky/ProjectsList";
import CTAWithMarquee from "@/components/projects/works-grid-sticky/CTAWithMarquee";
export default function WorksGridStickyPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridStickyShowcase />
        <ParallaxDividerVideo />
        <ProjectsList />
        <CTAWithMarquee />
      </div>
      <Footer2 />
    </>
  );
}

