import { Briefcase, Video, Focus, ArrowRight, ArrowLeft } from "lucide-react";
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
} from "./FindASolutionPage.styles";
import { useEffect } from "react";

const FindASolutionPage = () => {
  useEffect(() =>{
    document.title="Find a solution | NMC Cinemas"
  }, [])
  return (
    <PageWrapper>
      <HeroSection>
        <BackBtn as={Link} to="/">
          <ArrowLeft size={16} /> Back
        </BackBtn>
        <HeroBg $image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80" />
        <HeroContent>
          <Label>Workspace</Label>
          <Heading>
            Hybrid <HeadingItalic>Workforces.</HeadingItalic>
          </Heading>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <div className="container">
          <ContentText>
            Enhance productivity and seamless collaboration across your corporate environment. Our workspace solutions provide robust, intuitive AV configurations that bridge the gap between remote and in-office teams.
          </ContentText>

          <div className="row g-4 mt-5">
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Video size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Conference AV</CardTitle>
                <CardDesc>
                  High-definition camera arrays and crystal-clear microphone setups designed to make virtual meetings feel flawlessly natural.
                </CardDesc>
              </DetailCard>
            </div>
            
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Focus size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Centralized Control</CardTitle>
                <CardDesc>
                  One-touch systems that effortlessly manage lighting, video, and audio ensuring zero latency and a smooth meeting workflow.
                </CardDesc>
              </DetailCard>
            </div>

            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Briefcase size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Boardroom Integration</CardTitle>
                <CardDesc>
                  Scalable display walls and acoustic treatments meticulously designed for corporate boardrooms and large-scale venues.
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

export default FindASolutionPage;
