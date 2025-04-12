import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  limit: number;
}

const ExpandableText = ({ children, limit = 100 }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.slice(0, limit) + "...";

  return (
    <>
      <Text>{summary}</Text>
      <Button size="xs" fontWeight="bold" colorPalette="yellow" paddingX={2} height={6} onClick={() => setExpanded(!expanded)}>{expanded ? "Show Less" : "Read More"}</Button>
    </>
  );
};

export default ExpandableText;