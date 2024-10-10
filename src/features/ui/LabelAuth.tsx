import { Flex, Text } from "@chakra-ui/react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface LabelAuthProps {
  fontWeight?: string;
  fontColor?: string;
  fontSize?: string;
  children?: string;
  jc?: string;
  rumah?: string;
  tag?: string;
  hour?: string;
}


export default function TitleAuth({
  fontColor,
  fontWeight,
  fontSize,
  children,
}: LabelAuthProps) {
  return (
    <Text
      fontSize={fontSize}
      color={fontColor}
      fontWeight={fontWeight}
      textAlign="start"
      as="h1"
      mb={1}
      ml={4}
    >
      {children}
    </Text>
  );
}
export function LabelAuth({
  fontColor,
  fontWeight,
  fontSize,
  children,
  jc,
}: LabelAuthProps) {
  return (
    <>
      <label
        style={{
          marginTop: "10px",
          marginBottom: "0px",
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: fontColor,
          display: "flex",
          justifyContent: jc,
        }}
      >
        {children}
      </label>
    </>
  );
}
export function LabelName({ children, fontColor, tag, hour }: LabelAuthProps) {
  return (
    <>
      <Flex direction={"row"} m={2}>
        <Text color={fontColor} fontSize={"sm"}>
          {children}
        </Text>
        <Text ml={2} fontSize={"sm"} color={"gray.500"}>
          {tag}
        </Text>
        <Text ml={2} fontSize={"sm"} color={"gray.500"}>
          <FontAwesomeIcon icon={faCircle} size="2xs" />
        </Text>
        <Text ml={2} fontSize={"sm"} color={"gray.500"}>
          {hour}
        </Text>
      </Flex>
    </>
  );
}
