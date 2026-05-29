import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/projects/works-default/InnerHeadline";
import ProjectsStack from "@/components/projects/works-default/ProjectsStack";
import ProjectsList from "@/components/projects/works-default/ProjectsList";
import ParallaxDividerVideo from "@/components/projects/works-default/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/projects/works-default/TestimonialsSticky";
import CTAWithMarquee from "@/components/projects/works-default/CTAWithMarquee";
export default function WorksDefaultPage() {
  return (
    <>
      <InnerHeadline />
      <ProjectsStack />
      <ProjectsList />
      <ParallaxDividerVideo />
      <TestimonialsSticky />
      <CTAWithMarquee />
      <Footer2 />
    </>
  );
}

