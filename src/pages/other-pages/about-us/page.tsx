import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/other-pages/about-us/InnerHeadline";
import ParallaxDividerImage from "@/components/other-pages/about-us/ParallaxDividerImage";
import Process from "@/components/other-pages/about-us/Process";
import DoubleMarqueeDivider from "@/components/other-pages/about-us/DoubleMarqueeDivider";
import Awards from "@/components/other-pages/about-us/Awards";
import TeamGrid from "@/components/other-pages/about-us/TeamGrid";
import ParallaxDividerImage2 from "@/components/other-pages/about-us/ParallaxDividerImage2";
import Approach from "@/components/other-pages/about-us/Approach";
import BlogPreview from "@/components/other-pages/about-us/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/about-us/CTAWithMarquee";
export default function AboutUsPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <ParallaxDividerImage />
        <Process />
        <DoubleMarqueeDivider />
        <Awards />
        <TeamGrid />
        <ParallaxDividerImage2 />
        <Approach />
        <BlogPreview />
        <CTAWithMarquee />
      </>
      <Footer2 />
    </>
  );
}

