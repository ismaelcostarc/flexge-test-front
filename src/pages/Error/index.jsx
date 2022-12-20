import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";

export const ErrorPage = () => {
  return (
    <Container>
      <div>
        <Title>Oops!</Title>
        <p>This page doesn't exists.</p>
        <Link to="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </Container>
  );
};
