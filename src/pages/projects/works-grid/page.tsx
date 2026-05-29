import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/projects/works-grid/InnerHeadline";
import ProjectsGridX3Showcase from "@/components/projects/works-grid/ProjectsGridX3Showcase";
import ParallaxDividerVideo from "@/components/projects/works-grid/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/projects/works-grid/TestimonialsSticky";
import CTAWithMarquee from "@/components/projects/works-grid/CTAWithMarquee";
export default function WorksGridPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridX3Showcase />
        <ParallaxDividerVideo />
        <TestimonialsSticky />
        <CTAWithMarquee />
      </div>
      <Footer2 />
    </>
  );
}

