import logo from "../../../../assets/logo.png";
import {
  Section,
  GlowOrb,
  HeaderRow,
  Label,
  Heading,
  HeadingItalic,
  HeaderRight,
  StatBanner,
  StatNumber,
  StatTextCol,
  StatTitle,
  StatDesc,
  CardGridWrapper,
  Card,
  CardNum,
  CardTitle,
  CardText,
  CardAccent,
  Footer,
  Avatar,
  AuthorName,
  AuthorRole,
} from "./WhyChooseUs.styles";

const features = [
  {
    title: "Bespoke Design",
    desc: "Custom home theatre design and installation tailored precisely to your room's acoustics and aesthetic.",
  },
  {
    title: "Premium Brands",
    desc: "Exclusive partnerships with the world's most elite audio and video technology manufacturers.",
  },
  {
    title: "Acoustic Tuning",
    desc: "Professional acoustic optimization ensuring every seat delivers an immersive soundstage.",
  },
  {
    title: "Luxury Seating",
    desc: "Motorized, bespoke recliner seating solutions designed for absolute comfort during marathon viewings.",
  },
  {
    title: "Smart Integration",
    desc: "Complete end-to-end AV integration with your home's lighting, climate, and control systems.",
  },
  {
    title: "Expert Calibration",
    desc: "Meticulous post-installation calibration utilizing industry-leading audio measurement tools.",
  },
];

const WhyChooseUs = () => {
  return (
    <Section id="why-us">
      <GlowOrb />

      <div className="container">
        {/* ── HEADER ── */}
        <HeaderRow className="row align-items-md-end">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Label>Why Choose Us</Label>
            <Heading>
              Elevating the <br />
              <HeadingItalic>Cinematic Experience.</HeadingItalic>
            </Heading>
          </div>
          <div className="col-12 col-md-5 offset-md-1">
            <HeaderRight>
              With over three decades in the industry, we deliver uncompromising
              audio-visual excellence tailored for the luxury homeowner.
            </HeaderRight>
          </div>
        </HeaderRow>

        {/* ── 35+ YEARS STAT BANNER ── */}
        <StatBanner className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <StatNumber>35+</StatNumber>
          </div>
          <StatTextCol className="col-12 col-md-8 mt-4 mt-md-0">
            <StatTitle>Years of Experience</StatTitle>
            <StatDesc className="mb-0">
              With over three decades in the audio-visual industry, NMC delivers
              uncompromising cinematic excellence and bespoke integration
              tailored for the luxury homeowner.
            </StatDesc>
          </StatTextCol>
        </StatBanner>

        {/* ── FEATURES GRID ── */}
        <CardGridWrapper className="row g-0">
          {features.map((feature, i) => (
            <div key={feature.title} className="col-12 col-md-6 col-lg-4">
              <Card>
                <CardNum>0{i + 1}</CardNum>
                <CardTitle>{feature.title}</CardTitle>
                <CardText className="mb-0">{feature.desc}</CardText>
                <CardAccent />
              </Card>
            </div>
          ))}
        </CardGridWrapper>

        {/* ── FOOTER (N. Mahesh) ── */}
        <Footer className="row justify-content-center">
          <div className="col-auto d-flex align-items-center gap-3">
            <Avatar src={logo} alt="N. Mahesh" />
            <div>
              <AuthorName> Mahesh</AuthorName>
              <AuthorRole>Founder, NMC</AuthorRole>
            </div>
          </div>
        </Footer>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
