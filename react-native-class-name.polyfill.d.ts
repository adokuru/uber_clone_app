import "react-native";
// polyfill className prop for react-native Components
declare module "react-native" {
  interface TextProps {
    className?: string;
  }
  interface PressableProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }
  interface InputAccessoryViewProps {
    className?: string;
  }

  interface ImagePropsBase {
    className?: string;
  }

  interface TouchableWithoutFeedbackProps {
    className?: string;
  }
  // others StyleProp<?> in node_modules/@types/react-native extends up show, should not define again.
}
