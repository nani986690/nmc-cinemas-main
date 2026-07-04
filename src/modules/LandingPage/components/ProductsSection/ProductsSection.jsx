import {
  Tv,
  Speaker,
  Projector,
  MonitorPlay,
  Armchair,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import nmcCatalog from "../../../ProductsListPage/data";
import {
  Section,
  GlowOrb,
  SectionHeader,
  Label,
  Heading,
  HeadingItalic,
  HeaderRight,
  Grid,
  Card,
  CardNumber,
  CardImage,
  CardCategory,
  CardTitle,
  CardDesc,
  CardAccent,
} from "./ProductsSection.styles";

const categoryData = {
  audio: {
    icon: Speaker,
    desc: "Precision-engineered speakers for crisp, immersive sound distribution.",
    img: "https://cdn.jsdelivr.net/gh/nani986690/nmcpics@main/adudio-systems/G_Utopia_Evo_Carrara_White_34_PT.jpg",
  },
  av: {
    icon: MonitorPlay,
    desc: "Powerful AV receivers centralizing audio and video in one place.",
    img: "https://cdn.jsdelivr.net/gh/nani986690/nmcpics@main/adudio-systems/Denon_AVR-A1H_ImageUpdate.webp",
  },
  projector: {
    icon: Projector,
    desc: "High-lumen laser projectors offering vibrant imagery.",
    img: "https://cdn.jsdelivr.net/gh/nani986690/nmcpics@main/projectors/W5800.webp",
  },
  screen: {
    icon: Tv,
    desc: "Seamless screens to deliver 4K brilliance and sharpness.",
    img: "https://www.elitescreens.com.au/wp-content/uploads/photo-gallery/Lunette_ES745.jpg",
  },
  recliner: {
    icon: Armchair,
    desc: "Premium seating designed for ultimate comfort in your home theater.",
    img: "https://www.duroflexworld.com/cdn/shop/files/1_b34fd737-fa60-4623-aab8-2303597e502d.jpg?v=1746617742",
  },
};

const ProductsSection = () => {
  const navigate = useNavigate();
  const { categories, products } = nmcCatalog;

  return (
    <Section id="products">
      <GlowOrb />

      <div className="container">
        <SectionHeader>
          <div>
            <Label>Our Products</Label>
            <Heading>
              Built for <br />
              <HeadingItalic>Every Space.</HeadingItalic>
            </Heading>
          </div>
          <HeaderRight>
            From intimate boardrooms to large-scale venues — our product range
            covers every audio-visual need with precision and elegance.
          </HeaderRight>
        </SectionHeader>

        <Grid>
          {categories.map((cat, i) => {
            const extraData = categoryData[cat.id] || { icon: Tv, desc: "" };
            const Icon = extraData.icon;

            const image = extraData.img || "";

            return (
              <Card key={cat.id}>
                <CardNumber>0{i + 1}</CardNumber>

                <CardImage $image={image}>
                  {!image && <Icon size={48} strokeWidth={0.75} />}
                </CardImage>

                <CardCategory>{cat.label}</CardCategory>
                <CardTitle>{cat.label}</CardTitle>
                <CardDesc>{extraData.desc}</CardDesc>

                <CardAccent />
              </Card>
            );
          })}

          {/* 6th Card: Explore all products */}
          <Card
            onClick={() => navigate("/products")}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <ArrowRight size={48} strokeWidth={0.75} color="var(--accent)" />
            <CardTitle>Explore All Products</CardTitle>
            <CardAccent />
          </Card>
        </Grid>
      </div>
    </Section>
  );
};

export default ProductsSection;
