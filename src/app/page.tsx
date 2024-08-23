import Button from "@/components/atoms/button";
import { ArrowRightOutlined, EditOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "5rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button size="large" disabled>
              Button text
            </Button>
            <Button size="large">Button text</Button>
            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Button text
            </Button>
            <Button size="large" icon={<EditOutlined />} iconPosition="end" />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button disabled>Button text</Button>
            <Button>Button text</Button>
            <Button icon={<ArrowRightOutlined />} iconPosition="end">
              Button text
            </Button>
            <Button icon={<EditOutlined />} iconPosition="end" />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button size="small" disabled>
              Button text
            </Button>
            <Button size="small">Button text</Button>
            <Button
              size="small"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Button text
            </Button>
            <Button size="small" icon={<EditOutlined />} iconPosition="end" />
          </div>
        </div>

        <div>
          <div style={{ padding: "2rem 0", display: "flex", gap: "2rem" }}>
            <Button size="large" disabled secondary>
              Button text
            </Button>
            <Button size="large" secondary>
              Button text
            </Button>
            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              secondary
            >
              Button text
            </Button>
            <Button
              size="large"
              icon={<EditOutlined />}
              iconPosition="end"
              secondary
            />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button disabled secondary>
              Button text
            </Button>
            <Button secondary>Button text</Button>
            <Button icon={<ArrowRightOutlined />} iconPosition="end" secondary>
              Button text
            </Button>
            <Button icon={<EditOutlined />} iconPosition="end" secondary />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button size="small" disabled secondary>
              Button text
            </Button>
            <Button size="small" secondary>
              Button text
            </Button>
            <Button
              size="small"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              secondary
            >
              Button text
            </Button>
            <Button
              size="small"
              icon={<EditOutlined />}
              iconPosition="end"
              secondary
            />
          </div>
        </div>

        <div>
          <div style={{ padding: "2rem 0", display: "flex", gap: "2rem" }}>
            <Button size="large" disabled tertiary>
              Button text
            </Button>
            <Button size="large" tertiary>
              Button text
            </Button>
            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              tertiary
            >
              Button text
            </Button>
            <Button
              size="large"
              icon={<EditOutlined />}
              iconPosition="end"
              tertiary
            />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button disabled tertiary>
              Button text
            </Button>
            <Button tertiary>Button text</Button>
            <Button icon={<ArrowRightOutlined />} iconPosition="end" tertiary>
              Button text
            </Button>
            <Button icon={<EditOutlined />} iconPosition="end" tertiary />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button size="small" disabled tertiary>
              Button text
            </Button>
            <Button size="small" tertiary>
              Button text
            </Button>
            <Button
              size="small"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              tertiary
            >
              Button text
            </Button>
            <Button
              size="small"
              icon={<EditOutlined />}
              iconPosition="end"
              tertiary
            />
          </div>
        </div>

        <div>
          <div style={{ padding: "2rem 0", display: "flex", gap: "2rem" }}>
            <Button size="large" disabled type="text">
              Button text
            </Button>
            <Button size="large" type="text">
              Button text
            </Button>
            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              type="text"
            >
              Button text
            </Button>
            <Button
              size="large"
              icon={<EditOutlined />}
              iconPosition="end"
              type="text"
            />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button disabled type="text">
              Button text
            </Button>
            <Button type="text">Button text</Button>
            <Button
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              type="text"
            >
              Button text
            </Button>
            <Button icon={<EditOutlined />} iconPosition="end" type="text" />
          </div>

          <div style={{ padding: "2rem 0", display: "flex", gap: "1rem" }}>
            <Button size="small" disabled type="text">
              Button text
            </Button>
            <Button size="small" type="text">
              Button text
            </Button>
            <Button
              size="small"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              type="text"
            >
              Button text
            </Button>
            <Button
              size="small"
              icon={<EditOutlined />}
              iconPosition="end"
              type="text"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
