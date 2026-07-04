import { useEffect } from "react";
import { Home, ArrowLeft, Compass } from "lucide-react";
import {
  PageWrapper,
  BgGlow,
  Content,
  ErrorCode,
  IconWrapper,
  Title,
  Description,
  ButtonGroup,
  PrimaryBtn,
  SecondaryBtn,
  Separator,
} from "./NotFound.styles";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 — Page Not Found | NMC Cinemas";
  }, []);

  return (
    <PageWrapper>
      <BgGlow />
      <ErrorCode>404</ErrorCode>

      <Content>
        <IconWrapper>
          <Compass />
        </IconWrapper>

        <Title>Lost in the Sound.</Title>
        <Description>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to discovering premium audio-visual experiences.
        </Description>

        <ButtonGroup>
          <PrimaryBtn to="/">
            <Home size={16} />
            Back to Home
          </PrimaryBtn>
          <SecondaryBtn to="/products">
            <ArrowLeft size={16} />
            Browse Products
          </SecondaryBtn>
        </ButtonGroup>

        <Separator>
          <span />
          <span />
          <span />
        </Separator>
      </Content>
    </PageWrapper>
  );
};

export default NotFound;
