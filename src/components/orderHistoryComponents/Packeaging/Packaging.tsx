import { Text } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";

const Packaging = () => {
  return (
    <Animated.View entering={SlideInRight.duration(400).delay(100)}>
      <Text>Packaging</Text>
    </Animated.View>
  );
};

export default Packaging;
