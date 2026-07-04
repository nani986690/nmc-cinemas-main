import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

const WhatsAppIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

import nmcCatalog from "../ProductsListPage/data";
import {
  PageWrapper,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSep,
  BreadcrumbCurrent,
  DetailHero,
  HeroContent,
  HeroMeta,
  CategoryDot,
  HeroBrand,
  HeroTitle,
  HeroDesc,
  ConfiguratorWrapper,
  ColorLabel,
  ColorOptionsGrid,
  ColorOption,
  HeroActions,
  ActionBtn,
  GallerySection,
  GalleryGrid,
  MainImage,
  ThumbRow,
  ThumbImg,
  ContentGrid,
  FeaturesSection,
  SectionTitle,
  SectionAccent,
  FeaturesList,
  FeatureItem,
  FeatureDot,
  SpecsSection,
  SpecsTable,
  SpecRow,
  SpecLabel,
  SpecValue,
  BackLink,
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundText,
} from "./ProductDetail.styles";

const { categories, products } = nmcCatalog;

const ProductDetail = () => {
  const { category, slug } = useParams();

  useEffect(() => {
    document.title = `${category} | ${slug} | NMC Cinemas`;
  }, [category, slug]);

  const product = useMemo(
    () => products.find((p) => p.category === category && p.slug === slug),
    [category, slug]
  );

  const cat = useMemo(
    () => categories.find((c) => c.id === category),
    [category]
  );

  const accentColor = cat?.color || "var(--accent)";

  const [activeImg, setActiveImg] = React.useState(0);
  const [selectedVariant, setSelectedVariant] = React.useState(0);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  // Deferred below

  if (!product) {
    return (
      <NotFoundWrapper>
        <NotFoundTitle>Product Not Found</NotFoundTitle>
        <NotFoundText>
          The product you&apos;re looking for doesn&apos;t exist in our catalog.
        </NotFoundText>
        <BackLink to="/products">
          <ArrowLeft size={14} />
          Back to Catalog
        </BackLink>
      </NotFoundWrapper>
    );
  }

  const {
    brand,
    series,
    name,
    description,
    features = [],
    specifications = {},
    images = [],
    sourceUrl,
    colors = [],
    image,
  } = product;

  // Build spec rows from the specifications object
  const specEntries = Object.entries(specifications).filter(
    ([, val]) => val !== null && val !== undefined && val !== ""
  );

  // Derive the active image array
  let resolvedImages = [];
  if (typeof image === "string") resolvedImages = [image];
  else if (Array.isArray(image) && image.length > 0) resolvedImages = image;
  else if (images && images.length > 0) resolvedImages = images;

  const hasColors = colors.length > 0;
  const activeColorObject = hasColors ? colors[selectedVariant] : null;
  const displayImages = hasColors 
    ? (activeColorObject.images && activeColorObject.images.length > 0 ? activeColorObject.images : resolvedImages)
    : resolvedImages;

  // WhatsApp msg updates dynamically if colors are set
  const whatsappMsg = product
    ? encodeURIComponent(
        `Hi, I'm interested in the ${brand} ${name}${activeColorObject ? ` in ${activeColorObject.name}` : ''}. Could you share pricing and availability?`
      )
    : "";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <PageWrapper>
      {/* ── breadcrumb ── */}
      <div className="container">
        <Breadcrumb>
          <BreadcrumbLink to="/products">Products</BreadcrumbLink>
          <BreadcrumbSep><ChevronRight size={12} /></BreadcrumbSep>
          <BreadcrumbLink to={`/products?filter=${category}`}>{cat?.label || category}</BreadcrumbLink>
          <BreadcrumbSep><ChevronRight size={12} /></BreadcrumbSep>
          <BreadcrumbCurrent>{name}</BreadcrumbCurrent>
        </Breadcrumb>

        {/* back */}
        <BackLink to="/products" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
          <ArrowLeft size={14} />
          Back to All Products
        </BackLink>
      </div>

      {/* ── hero ── */}
      <DetailHero>
        <div className="container">
          <HeroContent>
            <HeroMeta>
              <CategoryDot color={accentColor} />
              <span>{cat?.label}</span>
              {series && <span> · {series}</span>}
            </HeroMeta>

            <HeroBrand>{brand}</HeroBrand>
            <HeroTitle color={accentColor}>{name}</HeroTitle>
            <HeroDesc>{description}</HeroDesc>

            {hasColors && (
              <ConfiguratorWrapper>
                <ColorLabel>
                  Finish: <strong>{activeColorObject.name}</strong>
                </ColorLabel>
                <ColorOptionsGrid>
                  {colors.map((c, idx) => (
                    <ColorOption
                      key={idx}
                      bg={c.hex}
                      color={accentColor}
                      active={selectedVariant === idx}
                      onClick={() => {
                        setSelectedVariant(idx);
                        setActiveImg(0); // Reset main gallery image on color swap
                      }}
                      title={c.name}
                      aria-label={`Select ${c.name} color`}
                    />
                  ))}
                </ColorOptionsGrid>
              </ConfiguratorWrapper>
            )}

            <HeroActions style={{ marginTop: hasColors ? "0" : "2rem" }}>
              <ActionBtn
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                color={accentColor}
              >
                <WhatsAppIcon size={14} />
                Enquire on WhatsApp
              </ActionBtn>
            </HeroActions>
          </HeroContent>
        </div>
      </DetailHero>

      {/* ── gallery ── */}
      {displayImages.length > 0 && (
        <GallerySection>
          <div className="container">
            <GalleryGrid>
              <MainImage
                src={displayImages[activeImg]}
                alt={`${name} — image ${activeImg + 1}`}
                loading="lazy"
                decoding="async"
                title={`${name} — image ${activeImg + 1}`}
              />
              {displayImages.length > 1 && (
                <ThumbRow>
                  {displayImages.map((img, i) => (
                    <ThumbImg
                      key={i}
                      src={img}
                      alt={`${name} thumbnail ${i + 1}`}
                      active={i === activeImg}
                      color={accentColor}
                      onClick={() => setActiveImg(i)}
                      loading="lazy"
                      decoding="async"
                      title={`${name} thumbnail ${i + 1}`}
                    />
                  ))}
                </ThumbRow>
              )}
            </GalleryGrid>
          </div>
        </GallerySection>
      )}

      {/* ── features + specs ── */}
      <div className="container">
        <ContentGrid>
          {/* features column */}
          {features.length > 0 && (
            <FeaturesSection>
              <SectionTitle>
                <SectionAccent color={accentColor} />
                Key Features
              </SectionTitle>
              <FeaturesList>
                {features.map((feat, i) => (
                  <FeatureItem key={i}>
                    <FeatureDot color={accentColor} />
                    {feat}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeaturesSection>
          )}

          {/* specs column */}
          {specEntries.length > 0 && (
            <SpecsSection>
              <SectionTitle>
                <SectionAccent color={accentColor} />
                Specifications
              </SectionTitle>
              <SpecsTable>
                {specEntries.map(([key, val]) => (
                  <SpecRow key={key}>
                    <SpecLabel>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (s) => s.toUpperCase())}
                    </SpecLabel>
                    <SpecValue>
                      {Array.isArray(val) ? val.join(", ") : String(val)}
                    </SpecValue>
                  </SpecRow>
                ))}
              </SpecsTable>
            </SpecsSection>
          )}
        </ContentGrid>

      </div>
    </PageWrapper>
  );
};

export default ProductDetail;
