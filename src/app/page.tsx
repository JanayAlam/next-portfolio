import Avatar from "@/components/atoms/avatar";
import { Container } from "@/components/atoms/grid";

const Home = () => {
  return (
    <main>
      <Container margin="5rem">
        <Avatar src="https://ui-avatars.com/api/?name=John+Doe" />
      </Container>
    </main>
  );
};

export default Home;
