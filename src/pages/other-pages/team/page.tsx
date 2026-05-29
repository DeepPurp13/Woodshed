import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/other-pages/team/InnerHeadline";
import SplitAboutTeam from "@/components/other-pages/team/SplitAboutTeam";
import TeamList from "@/components/other-pages/team/TeamList";
import ParallaxDividerImage from "@/components/other-pages/team/ParallaxDividerImage";
import TestimonialsSlider from "@/components/other-pages/team/TestimonialsSlider";
import CTAWithMarquee from "@/components/other-pages/team/CTAWithMarquee";
export default function TeamPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <SplitAboutTeam />
        <TeamList />
        <ParallaxDividerImage />
        <TestimonialsSlider />
        <CTAWithMarquee />
      </>
      <Footer2 />
    </>
  );
}

