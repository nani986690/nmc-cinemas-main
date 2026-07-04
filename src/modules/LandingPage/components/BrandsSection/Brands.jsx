import {
  Section,
  FadeLeft,
  FadeRight,
  SectionLabel,
  LabelText,
  Track,
  Inner,
  BrandItem,
  BrandName,
  Dot,
} from "./Brands.styles";

/* Real AV brands that NMC might partner with */
const brands = [
  "focal",
  "JBL",
  "XTZ",
  "Klipsch",
  "Polk",
  "Monitor Audio",
  "Denon",
  "Marantz",
  "Onkyo",
  "Qsc",
  "iotavx",
  "arcam",
  "Sony",
  "jvc",
  "benq",
  "optoma",
  "little nap",
  "lazy boy",
  "liberty",
  "lumina by galalite",
  "vutec",
  "elite screens",
];

const Brands = () => {
  /* Duplicate for seamless infinite loop */
  const doubled = [...brands, ...brands];

  return (
    <Section>
      <FadeLeft />
      <FadeRight />

      <SectionLabel>
        <LabelText>Trusted Brands We Work With</LabelText>
      </SectionLabel>

      <Track>
        <Inner>
          {doubled.map((brand, i) => (
            <BrandItem key={i}>
              <BrandName>{brand}</BrandName>
              {/* separator dot between items */}
              <Dot />
            </BrandItem>
          ))}
        </Inner>
      </Track>
    </Section>
  );
};

export default Brands;
