import { MonitorPlay, Speaker, Armchair, ArrowRight, ArrowLeft } from "lucide-react";
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
} from "./ExplorePage.styles";
import { useEffect } from "react";

const ExplorePage = () => {

  useEffect(() =>{
    document.title="Explore | NMC Cinemas"
  }, [])
  return (
    <PageWrapper>
      <HeroSection>
        <BackBtn as={Link} to="/">
          <ArrowLeft size={16} /> Back
        </BackBtn>
        <HeroBg $image="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80" />
        <HeroContent>
          <Label>Home</Label>
          <Heading>
            Home <HeadingItalic>Entertainment.</HeadingItalic>
          </Heading>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <div className="container">
          <ContentText>
            Discover the ultimate home entertainment solutions designed specifically for exceptional audio and visual fidelity. We curate and install premium display solutions bringing a cinematic experience right into your living room.
          </ContentText>

          <div className="row g-4 mt-5">
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <MonitorPlay size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>4K & 8K Displays</CardTitle>
                <CardDesc>
                  Stunning visual precision with industry-leading projectors and ambient light rejecting screens designed for luxury spaces.
                </CardDesc>
              </DetailCard>
            </div>
            
            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Speaker size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Immersive Audio</CardTitle>
                <CardDesc>
                  Experience sound seamlessly integrated into your room's architecture with uncompromising Dolby Atmos surround capabilities.
                </CardDesc>
              </DetailCard>
            </div>

            <div className="col-12 col-md-4">
              <DetailCard>
                <CardIconWrapper>
                  <Armchair size={32} strokeWidth={1} />
                </CardIconWrapper>
                <CardTitle>Luxury Seating</CardTitle>
                <CardDesc>
                  Bespoke, ergonomic recliners built for hours of ultimate comfort while enjoying your favorite films and series.
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

export default ExplorePage;
