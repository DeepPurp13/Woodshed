import { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";


import TemplateRuntimeProvider from "@/components/common/TemplateRuntimeProvider";
import Header1 from "@/components/headers/Header1";
import MenuRuntimeShell from "@/components/headers/MenuRuntimeShell";
import PreviewPage from "@/pages/preview/page";
import IndexBrandingStudioPage from "@/pages/homes/index-branding-studio/page";
import IndexSoftwareDevelopmentCompanyPage from "@/pages/homes/index-software-development-company/page";
import IndexCreativeAgencyPage from "@/pages/homes/index-creative-agency/page";
import IndexFreelancerPortfolioPage from "@/pages/homes/index-freelancer-portfolio/page";
import IndexDesignStudioPage from "@/pages/homes/index-design-studio/page";
import IndexWebDeveloperPage from "@/pages/homes/index-web-developer/page";
import IndexPersonalPortfolioPage from "@/pages/homes/index-personal-portfolio/page";
import IndexDigitalAgencyPage from "@/pages/homes/index-digital-agency/page";
import IndexWebStudioPage from "@/pages/homes/index-web-studio/page";
import IndexDigitalDesignerPage from "@/pages/homes/index-digital-designer/page";
import BlogArticlePage from "@/pages/blogs/blog-article/page";
import BlogCreativePage from "@/pages/blogs/blog-creative/page";
import BlogStandardPage from "@/pages/blogs/blog-standard/page";
import AboutMePage from "@/pages/other-pages/about-me/page";
import AboutUsPage from "@/pages/other-pages/about-us/page";
import ContactPage from "@/pages/other-pages/contact/page";
import FaqPage from "@/pages/other-pages/faq/page";
import PricingPage from "@/pages/other-pages/pricing/page";
import ServicesPage from "@/pages/other-pages/services/page";
import TeamPage from "@/pages/other-pages/team/page";
import ProjectDetailsPage from "@/pages/projects/project-details/page";
import WorksDefaultPage from "@/pages/projects/works-default/page";
import WorksGridPage from "@/pages/projects/works-grid/page";
import WorksGridStickyPage from "@/pages/projects/works-grid-sticky/page";
import NotFoundPage from "@/pages/other-pages/404/page";

const DEFAULT_TITLE =
  "Preview ||| Azurio - Digital Agency & Personal Portfolio React.Js Template";
const DEFAULT_DESCRIPTION =
  "Azurio - Digital Agency & Personal Portfolio React.Js Template";

type SeoEntry = { title: string; description: string };

const ROUTE_SEO: Record<string, SeoEntry> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/preview": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/index-branding-studio": {
    title:
      "Branding Studio || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-software-development-company": {
    title:
      "Software Development Company || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-creative-agency": {
    title:
      "Creative Agency || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-freelancer-portfolio": {
    title:
      "Freelancer Portfolio || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-design-studio": {
    title:
      "Design Studio || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-web-developer": {
    title:
      "Web Developer || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-personal-portfolio": {
    title:
      "Personal Portfolio || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-digital-agency": {
    title:
      "Digital Agency || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-web-studio": {
    title:
      "Web Studio || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/index-digital-designer": {
    title:
      "Digital Designer || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/about-me": {
    title:
      "About Me || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/about-us": {
    title:
      "About Us || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/contact": {
    title:
      "Contact || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/faq": {
    title:
      "FAQ || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/pricing": {
    title:
      "Pricing || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title:
      "Services || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/team": {
    title:
      "Team || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/blog-article": {
    title:
      "Blog Article || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/blog-creative": {
    title:
      "Blog Creative || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/blog-standard": {
    title:
      "Blog Standard || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/project-details": {
    title:
      "Project Details || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/works-default": {
    title:
      "Works Default || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/works-grid": {
    title:
      "Works Grid || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/works-grid-sticky": {
    title:
      "Works Grid Sticky || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/404": {
    title:
      "404 || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
  "/not-found": {
    title:
      "404 || Azurio - Digital Agency & Personal Portfolio React.JsTemplate",
    description: DEFAULT_DESCRIPTION,
  },
};

function ScrollRefreshOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [location.pathname]);

  return null;
}

function RouteSEO() {
  const location = useLocation();
  const seo = ROUTE_SEO[location.pathname] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
  useEffect(() => {
    document.title = seo.title;
    let descriptionTag = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", seo.description);
  }, [seo.title, seo.description]);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
}

export default function App() {
  const initialTheme = useMemo<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("template.theme") === "dark" ? "dark" : "light";
  }, []);

  return (
    <TemplateRuntimeProvider>
      <Header1 initialTheme={initialTheme} />
      <MenuRuntimeShell />
      <RouteSEO />
      <ScrollRefreshOnRouteChange />
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route
          path="/index-branding-studio"
          element={<IndexBrandingStudioPage />}
        />
        <Route
          path="/index-software-development-company"
          element={<IndexSoftwareDevelopmentCompanyPage />}
        />
        <Route
          path="/index-creative-agency"
          element={<IndexCreativeAgencyPage />}
        />
        <Route
          path="/index-freelancer-portfolio"
          element={<IndexFreelancerPortfolioPage />}
        />
        <Route
          path="/index-design-studio"
          element={<IndexDesignStudioPage />}
        />
        <Route
          path="/index-web-developer"
          element={<IndexWebDeveloperPage />}
        />
        <Route
          path="/index-personal-portfolio"
          element={<IndexPersonalPortfolioPage />}
        />
        <Route
          path="/index-digital-agency"
          element={<IndexDigitalAgencyPage />}
        />
        <Route path="/index-web-studio" element={<IndexWebStudioPage />} />
        <Route
          path="/index-digital-designer"
          element={<IndexDigitalDesignerPage />}
        />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog-article" element={<BlogArticlePage />} />
        <Route path="/blog-creative" element={<BlogCreativePage />} />
        <Route path="/blog-standard" element={<BlogStandardPage />} />
        <Route path="/project-details" element={<ProjectDetailsPage />} />
        <Route path="/works-default" element={<WorksDefaultPage />} />
        <Route path="/works-grid" element={<WorksGridPage />} />
        <Route path="/works-grid-sticky" element={<WorksGridStickyPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </TemplateRuntimeProvider>
  );
}
