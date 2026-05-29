import Footer1 from "@/components/footers/Footer1";
import Hero from "@/components/preview/Hero";
import DemoGrid from "@/components/preview/DemoGrid";
import ContentPagesStack from "@/components/preview/ContentPagesStack";
import ResponsivePromo from "@/components/preview/ResponsivePromo";
import InnerPagesSlider from "@/components/preview/InnerPagesSlider";
import Components from "@/components/preview/Components";
import FeaturesCards from "@/components/preview/FeaturesCards";
import DemoCTA from "@/components/preview/DemoCTA";
export default function PreviewPage() {
  return (
    <div className="preview-page">
      <Hero />
      <DemoGrid />
      <ContentPagesStack />
      <ResponsivePromo />
      <InnerPagesSlider />
      <Components />
      <FeaturesCards />
      <DemoCTA />

      <Footer1 />
    </div>
  );
}
