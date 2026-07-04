import { GraduationCap, Users, MonitorUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  HeroSection,
  HeroBg,
  HeroContent,
  Label,
  Heading,
  HeadingItalic,
  ContentSection,
  ContentText,
  DetailCard,
  CardIconWrapper,
  CardTitle,
  CardDesc,
  CtaWrapper,
  PrimaryButton,
  BackBtn,
} from "./LearnMorePage.styles";
import { useEffect } from "react";

const LearnMorePage = () => {
  useEffect(() => {
    document.title="Learn more | NMC Cinemas"
  }, [])
  return (
    <PageWrapper>
      <HeroSection>
        <BackBtn as={Link} to="/">
          <ArrowLeft size={16} /> Back
        </BackBtn>
        <HeroBg $image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80" />
        <HeroContent>
          <Label>Education</Label>
          <Heading>
            Modern <HeadingItalic>Classrooms.</HeadingItalic>
          </Heading>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <div className="container">
          <ContentText>
            Foster engagement and elevate learning outcomes with intelligent educational technology. We integrate smart, durable AV infrastructures tailored for interactive classrooms and modern academic institutions.
          </ContentText>

          <div className="row g-4 mt-5">
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <MonitorUp size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Interactive Panels</CardTitle>
                <CardDesc>
                  Touch-enabled displays equipped with seamless casting designed to support collaborative teaching and active learning.
                </CardDesc>
              </DetailCard>
            </div>
            
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Users size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Auditorium Audio</CardTitle>
                <CardDesc>
                  Distributed sound systems designed to ensure crystal-clear vocal projection and acoustic balance across massive lecture halls.
                </CardDesc>
              </DetailCard>
            </div>

            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <GraduationCap size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Hybrid Delivery</CardTitle>
                <CardDesc>
                  Future-proof video-conferencing technology empowering educators to deliver engaging lessons both locally and remotely.
                </CardDesc>
              </DetailCard>
            </div>
          </div>

          <CtaWrapper>
            <PrimaryButton as={Link} to="/products">
              <span>Browse All Products</span>
              <ArrowRight size={14} />
            </PrimaryButton>
          </CtaWrapper>
        </div>
      </ContentSection>
    </PageWrapper>
  );
};

export default LearnMorePage;
