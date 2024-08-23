import Heading from "@/components/atoms/typography";

const Home = () => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <Heading level={1} fontWeightVariant="bold">
          This is heading 1
        </Heading>
        <Heading level={1}>This is heading 1</Heading>

        <Heading level={2} fontWeightVariant="bold">
          This is heading 2
        </Heading>
        <Heading level={2}>This is heading 2</Heading>

        <Heading level={3} fontWeightVariant="bold">
          This is heading 3
        </Heading>
        <Heading level={3}>This is heading 3</Heading>

        <Heading level={4} fontWeightVariant="bold">
          This is heading 4
        </Heading>
        <Heading level={4}>This is heading 4</Heading>

        <Heading level={5} fontWeightVariant="bold">
          This is heading 5
        </Heading>
        <Heading level={5}>This is heading 5</Heading>

        <Heading level={6} fontWeightVariant="bold">
          This is heading 6
        </Heading>
        <Heading level={6}>This is heading 6</Heading>
      </div>
    </main>
  );
};

export default Home;
