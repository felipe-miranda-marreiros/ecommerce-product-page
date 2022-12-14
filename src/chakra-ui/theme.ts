import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    orange: "hsl(26, 100%, 55%)",
    "pale-orange": "hsl(25, 100%, 94%)",
  },
  neutral: {
    "very-dark-blue": "hsl(220, 13%, 13%)",
    "dark-grayish-blue": "hsl(219, 9%, 45%)",
    "grayish-blue": "hsl(220, 14%, 75%)",
    "light-grayish-blue": "hsl(223, 64%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },
};

const popover = {
  Popover: {
    baseStyle: {
      content: {
        border: "none",
        backgroundColor: "white",
        width: "360px",
        height: "260px",
        top: "16px",
        right: "10px",
        boxShadow: "2xl",
      },
    },
  },
};

const fonts = {
  body: "Kumbh Sans, sans-serif",
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    ...popover,
  },
});
