import "./App.css";
import {
  Button,
  Switch,
  Typography,
  Link,
  Flex,
  FlexItem,
  RadioGroup,
  Radio,
} from "@deliveryhero/armor";

function App() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <FlexItem marginBottom={4}>
        <Button marginRight={2}>Primary</Button>
        <Button secondary marginRight={2}>
          Secondary
        </Button>
        <Button tertiary marginRight={2}>
          Tertiary
        </Button>
      </FlexItem>
      <FlexItem marginBottom={4}>
        <Typography>
          Please follow the <Link>link</Link> to find out more Go to{" "}
          <Link href="https://www.deliveryhero.com" target="_blank">
            DeliveryHero
          </Link>{" "}
          to find out more
        </Typography>
      </FlexItem>
      <FlexItem marginBottom={4}>
        <Switch defaultChecked label="Switched by default" />
      </FlexItem>
      <FlexItem marginBottom={4}>
        <RadioGroup name="radioGroup" selectedValue="pasta">
          <Radio value="pizza">Pizza</Radio>
          <Radio value="pasta">Pasta</Radio>
          <Radio value="risotto">Risotto</Radio>
        </RadioGroup>
      </FlexItem>
    </Flex>
  );
}

export default App;
