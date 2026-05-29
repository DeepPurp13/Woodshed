import Footer2 from "@/components/footers/Footer2";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
export default function BlogArticlePage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <BlogArticle />
        <MoreOnTopic />
        <CTAWithMarquee />
      </div>
      <Footer2 />
    </>
  );
}

