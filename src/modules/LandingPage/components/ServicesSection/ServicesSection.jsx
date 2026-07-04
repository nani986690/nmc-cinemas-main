import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Section,
  HeaderRow,
  Label,
  Heading,
  HeadingItalic,
  HeaderRight,
  PanelRow,
  Panel,
  PanelBg,
  PanelDivider,
  PanelContent,
  PanelTag,
  PanelTitle,
  PanelDesc,
  PanelCTA,
} from "./ServicesSection.styles";

const services = [
  {
    tag: "Education",
    title: "Solutions for Learning, Work, and Play",
    desc: "Solutions for the modern classroom from a leader in EdTech.",
    cta: "Learn More",
    href: "/learn-more",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    overlay: "var(--color-darker-brown-alpha-65)",
    overlayHover: "var(--color-darker-brown-alpha-30)",
  },
  {
    tag: "Workspace",
    title: "Workspace",
    desc: "Productivity, collaboration, and success for hybrid workforces.",
    cta: "Find a Solution",
    href: "/find-solution",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    overlay: "var(--color-darker-blue-alpha-65)",
    overlayHover: "var(--color-darker-blue-alpha-30)",
  },
  {
    tag: "Home",
    title: "Home",
    desc: "Display solutions for home entertainment and productivity.",
    cta: "Explore",
    href: "/explore",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80",
    overlay: "var(--color-dark-brown-alpha-65)",
    overlayHover: "var(--color-dark-brown-alpha-30)",
  },
];

const ServicesSection = () => {
  return (
    <Section id="services">
      <div className="container">
        <HeaderRow className="row align-items-md-end">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Label>What We Offer</Label>
            <Heading>
              Solutions for <br />
              <HeadingItalic>Learning, Work, and Play.</HeadingItalic>
            </Heading>
          </div>
          <div className="col-12 col-md-5 offset-md-1">
            <HeaderRight>
              Complete end-to-end integration and display solutions designed for
              modern classrooms, hybrid workspaces, and luxury home
              entertainment.
            </HeaderRight>
          </div>
        </HeaderRow>
      </div>

      <PanelRow>
        {services.map(
          ({ tag, title, desc, cta, href, image, overlay, overlayHover }, i) => (
            <Panel key={tag} $overlay={overlay} $overlayHover={overlayHover}>
              <PanelBg $image={image} />
              {i < services.length - 1 && <PanelDivider />}

              <PanelContent>
                <PanelTag>{tag}</PanelTag>
                <PanelTitle>{title}</PanelTitle>
                <PanelDesc>{desc}</PanelDesc>
                <PanelCTA as={Link} to={href}>
                  {cta} <ArrowUpRight size={12} />
                </PanelCTA>
              </PanelContent>
            </Panel>
          ),
        )}
      </PanelRow>
    </Section>
  );
};

export default ServicesSection;
