import React from "react";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import IndexBody from "./indexBody/IndexBody";
import WorkSection from "./indexBody/WorkSection";
import FAQSection from "./indexBody/FAQSection";
import DividerSection from "./indexBody/DividerSection";
import AwardEventsSection from "./indexBody/AwardEventsSection";
import BlogSection from "./indexBody/BlogSection";
import TestimonialSection from "./indexBody/TestimonialSection";
import MoreTeamSection from "./indexBody/MoreTeamSection";
import TeamWorkSection from "./indexBody/TeamWorkSection";
import FadeInSection from "../shared/FadeInSection";

const IndexPage = () => {
  return (
    <div className=" w-full h-auto">
      {/* landing page */}
      <LandingPage />
      {/* body */}

      <IndexBody />

      <WorkSection />

      <FAQSection />

      <DividerSection />

      <AwardEventsSection />

      <BlogSection />

      <TestimonialSection />

      <MoreTeamSection />

      <TeamWorkSection />
    </div>
  );
};

export default IndexPage;
