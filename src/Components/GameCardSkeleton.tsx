import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

type Props = {};

const GameCardSkeleton = (props: Props) => {
  return (
    <Card>
      <Skeleton
        height="200px"
        width={{ sm: "300px" }}
        overflow="hidden"
        borderRadius={10}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
