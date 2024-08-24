import {
  CTALabel,
  Heading,
  Label,
  Paragraph,
} from "@/components/atoms/typography";

const Home = () => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Heading level={1}>Inter Font Family</Heading>
        <Paragraph level={1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat
          voluptatum animi corporis exercitationem eligendi excepturi. Expedita
          perferendis perspiciatis tenetur, voluptate, nemo, aliquam eligendi
          culpa illo assumenda maiores eos minus facere nihil iusto tempora
          error cumque veniam. Unde repellendus voluptas qui! Provident deserunt
          eaque eveniet culpa quam pariatur vitae doloremque magni voluptatum
          maiores maxime laborum dolorem consectetur delectus veritatis
          explicabo, qui, eum sint iusto! Earum quas facere maiores sed libero,
          neque at ad, ex mollitia corrupti quasi, ullam architecto eligendi
          veniam voluptatibus. Nostrum obcaecati culpa eaque debitis libero
          possimus deserunt ut corrupti, blanditiis aut magnam. Blanditiis
          temporibus repellat officia atque fugiat qui voluptatem quas ipsa
          nesciunt, incidunt ea inventore dicta saepe odio cupiditate
          perspiciatis tempore expedita molestias minus eligendi. Assumenda
          nostrum nulla impedit in ipsum labore explicabo laborum fuga delectus
          sed deleniti architecto quas accusantium sapiente asperiores culpa
          suscipit est expedita quasi atque laboriosam, ad eius nisi. Rem, sunt
          debitis.
        </Paragraph>
        <Label level={1}>This is a label</Label>
        <CTALabel underlined>This is a CTA label</CTALabel>
      </div>
    </main>
  );
};

export default Home;
