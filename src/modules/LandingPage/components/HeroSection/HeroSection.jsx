import { ArrowDownRight, PlayCircle } from "lucide-react";
import heroImg from "../../../../assets/heroImg.png";
import {
  Section,
  BgLayer,
  Glow1,
  Glow2,
  NoiseOverlay,
  LeftCol,
  SeriesLabel,
  SeriesText,
  SeriesLine,
  Headline,
  HeadlineGhost,
  HeadlineMain,
  HeadlineUnderline,
  CtaRow,
  BodyText,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  PlayLabel,
  RightCol,
  ImageFrame,
  ProductImage,
  ImageGradient,
  FloatingBadge,
  BadgeText,
  VerticalCaption,
  CaptionText,
  ScrollIndicator,
  ScrollLine,
} from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <Section>
      {/* Animated background */}
      <BgLayer>
        <Glow1 />
        <Glow2 />
        <NoiseOverlay />
      </BgLayer>

      {/* Bootstrap container / grid */}
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center g-5">
          {/* Left — Typography & CTA */}
          <div className="col-12 col-md-7">
            <LeftCol>
              <SeriesLabel>
                <SeriesText>Series 01 / 2026</SeriesText>
                <SeriesLine />
              </SeriesLabel>

              <Headline>
                <HeadlineGhost>Premium</HeadlineGhost>
                <HeadlineMain>Solutions.</HeadlineMain>
                <HeadlineUnderline />
              </Headline>

              <CtaRow>
                <BodyText>
                  Professional audio-visual solutions crafted for modern spaces.
                  Where precision engineering meets the warmth of world-class
                  experience.
                </BodyText>

                <ButtonGroup>
                  <PrimaryButton onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span>Explore Products</span>
                    <ArrowDownRight size={14} />
                  </PrimaryButton>

                  {/* <SecondaryButton>
                    <PlayCircle
                      size={30}
                      strokeWidth={1}
                      className="play-icon"
                    />
                    <PlayLabel>Watch Demo</PlayLabel>
                  </SecondaryButton> */}
                </ButtonGroup>
              </CtaRow>
            </LeftCol>
          </div>

          {/* Right — Product image */}
          <div className="col-12 col-md-5">
            <RightCol>
              <ImageFrame>
                <ProductImage
                  src={heroImg}
                  alt="Premium home theater and audio visual installation by NMC Home Cinemas"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="800"
                  height="600"
                  title="Premium home theater and audio visual installation by NMC Home Cinemas"
                />
                <ImageGradient />

                <FloatingBadge>
                  <BadgeText>
                    Premium <br />
                    <em>AV Install</em>
                  </BadgeText>
                </FloatingBadge>
              </ImageFrame>

              <VerticalCaption>
                <CaptionText>NMC Solutions // Est. 2010</CaptionText>
              </VerticalCaption>
            </RightCol>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator>
        <ScrollLine />
      </ScrollIndicator>
    </Section>
  );
};

export default HeroSection;
