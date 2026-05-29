import Footer2 from "@/components/footers/Footer2";
import InnerHeadline from "@/components/blogs/blog-standard/InnerHeadline";
import Blog from "@/components/blogs/blog-standard/Blog";
import CTAWithMarquee from "@/components/blogs/blog-standard/CTAWithMarquee";
export default function BlogStandardPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Blog />
        <CTAWithMarquee />
      </div>
      <Footer2 />
    </>
  );
}

