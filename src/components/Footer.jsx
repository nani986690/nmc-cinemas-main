import logo from "../assets/logo.png";
import nmcCatalog from "../modules/ProductsListPage/data";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FooterRoot,
  Scanline,
  MainGrid,
  BrandBlock,
  BrandLink,
  FooterLogoImg,
  FooterBrandDivider,
  FooterTaglineStack,
  BrandDesc,
  SocialRow,
  SocialLink,
  LinksGrid,
  LinkGroup,
  GroupTitle,
  LinkList,
  LinkItem,
  FooterLink,
  AddressText,
  BottomBar,
  Copyright,
  MadeBy,
} from "./Footer.styles";

const companyAddress = [
  "NMC CINEMAS",
  "Prakasam Road",
  "Nagari, Chittoor District",
  "Andhra Pradesh - 517590",
  "Email:info@nmchomecinemas.in",
  "Phone: +91 9032596016",
];

const Footer = () => {
  return (
    <FooterRoot>
      <Scanline />

      <div className="container">
        <MainGrid>
          {/* Left — Brand block */}
          <BrandBlock>
            <BrandLink href="/">
              <FooterLogoImg src={logo} alt="NMC Audio Visual Solutions" />
              <FooterBrandDivider />
              <FooterTaglineStack>
                <span>Audio</span>
                <span>Visual</span>
                <span>Solutions</span>
              </FooterTaglineStack>
            </BrandLink>

            <BrandDesc>
              Professional audio-visual solutions for modern spaces. We
              specialise in the intersection of architectural design and
              high-performance AV engineering.
            </BrandDesc>

            <SocialRow>
              <SocialLink
                href="https://www.instagram.com/nmchomecinemas?igsh=dHNhNGQ2cXV4OWc4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={15} strokeWidth={1} />
              </SocialLink>
            </SocialRow>
          </BrandBlock>

          {/* Right — Links Grid */}
          <LinksGrid>
            {/* Our Products */}
            <LinkGroup>
              <GroupTitle>Our Products</GroupTitle>
              <LinkList>
                {nmcCatalog.categories.map((cat) => (
                  <LinkItem key={cat.id}>
                    <FooterLink
                      as={Link}
                      to="/products"
                      state={{ category: cat.id }}
                    >
                      {cat.label}
                    </FooterLink>
                  </LinkItem>
                ))}
              </LinkList>
            </LinkGroup>

            {/* Address */}
            <LinkGroup>
              <GroupTitle>Our Address</GroupTitle>
              <AddressText>
                {companyAddress.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </AddressText>
            </LinkGroup>
          </LinksGrid>
        </MainGrid>

        {/* Bottom bar */}
        <BottomBar>
          <Copyright>
            &copy; {new Date().getFullYear()} NMC Audio Visual Solutions. All
            rights reserved.
          </Copyright>
          <MadeBy>
            Made by{" "}
            <a
              href="https://nivinex.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nivinex&trade;
            </a>
          </MadeBy>
        </BottomBar>
      </div>
    </FooterRoot>
  );
};

export default Footer;
