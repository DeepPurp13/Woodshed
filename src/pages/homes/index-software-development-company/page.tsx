import Footer3 from "@/components/footers/Footer3";
import Hero from "@/components/homes/index-software-development-company/Hero";
import ParallaxDividerImage from "@/components/homes/index-software-development-company/ParallaxDividerImage";
import ProjectsGrid from "@/components/homes/index-software-development-company/ProjectsGrid";
import ParallaxDividerImage2 from "@/components/homes/index-software-development-company/ParallaxDividerImage2";
import ParallaxDividerImage3 from "@/components/homes/index-software-development-company/ParallaxDividerImage3";
import CTA from "@/components/homes/index-software-development-company/CTA";
import BlogPreview from "@/components/homes/index-software-development-company/BlogPreview";

export default function IndexSoftwareDevelopmentCompanyPage() {
  return (
    <>
      <>
      <Hero />
        {/* This is the proff as a gallery */}
      <ProjectsGrid />
      <ParallaxDividerImage />
        {/* This is the proccess/how it works */}
      <BlogPreview />
      <ParallaxDividerImage2 />
      <ParallaxDividerImage3 />
      <CTA />
      </>
      <Footer3 />
    </>
  );
}
