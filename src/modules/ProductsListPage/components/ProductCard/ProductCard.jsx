import React from "react";
import { Link } from "react-router-dom";

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
import {
  Card,
  Thumb,
  CardImage,
  CardBadgeWrap,
  CardBadge,
  Body,
  BrandTag,
  ColorSwatchesContainer,
  CardColorDot,
  CardName,
  CardDesc,
  SpecTag,
  CardFooter,
  ViewDetailsLink,
  EnquireBtn,
} from "./ProductCard.styles";

const bgMap = {
  audio:     "linear-gradient(135deg, var(--color-gradient-dark-brown), var(--color-gradient-light-brown))",
  av:        "linear-gradient(135deg, var(--color-gradient-dark-blue), var(--color-gradient-light-blue))",
  projector: "linear-gradient(135deg, var(--color-gradient-dark-purple), var(--color-gradient-light-purple))",
  recliner:  "linear-gradient(135deg, var(--color-gradient-dark-green), var(--color-gradient-light-green))",
  screen:    "linear-gradient(135deg, var(--color-gradient-dark-gray), var(--color-gradient-light-gray))",
};

const ProductCard = ({ product, accentColor }) => {
  const { brand, series, name, description, category, slug, images, colors, specifications, image } = product;
  const bg = bgMap[category] || "var(--stone-deep)";
  
  let thumbSrc = `https://picsum.photos/seed/${slug}/400/300`;
  if (colors && colors.length > 0 && colors[0].images && colors[0].images.length > 0) {
    thumbSrc = colors[0].images[0];
  } else if (typeof image === "string") {
    thumbSrc = image;
  } else if (Array.isArray(image) && image.length > 0) {
    thumbSrc = image[0];
  } else if (images && images.length > 0) {
    thumbSrc = images[0];
  }
    
  const specType = specifications?.type || null;

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in the ${brand} ${name}. Could you share more details?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <Card accentColor={accentColor}>
      <Link to={`/products/${category}/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Thumb bg={bg}>
          <CardImage
            src={thumbSrc}
            alt={`${name} by ${brand}`}
            loading="lazy"
            decoding="async"
            title={`${name} by ${brand}`}
          />

          {specType && (
            <CardBadgeWrap>
              <CardBadge color={accentColor}>{specType}</CardBadge>
            </CardBadgeWrap>
          )}
        </Thumb>

        <Body>
          <BrandTag color={accentColor}>
            {brand}{series ? ` · ${series}` : ""}
          </BrandTag>

          {colors && colors.length > 0 && (
            <ColorSwatchesContainer>
              {colors.map((c, i) => (
                <CardColorDot key={i} bg={c.hex} title={c.name} />
              ))}
            </ColorSwatchesContainer>
          )}

          <CardName>{name}</CardName>
          <CardDesc>{description}</CardDesc>
        </Body>
      </Link>

      <CardFooter>
        <ViewDetailsLink to={`/products/${category}/${slug}`} color={accentColor}>
          View Details
        </ViewDetailsLink>
        <EnquireBtn
          as="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          color={accentColor}
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", justifyContent: "center" }}
        >
          <WhatsAppIcon size={14} />
          Enquire
        </EnquireBtn>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
