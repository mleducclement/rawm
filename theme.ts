import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "#0D100D" }
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "#" }
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "#3b3b3b" }
          },
          panel: {
            value: { _light: "{colors.white}", _dark: "#202020" }
          }
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.black}", _dark: "#f0f0f0" }
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "#ababab" }
          }
        }
      }
    }
  }
});

export const system = createSystem(defaultConfig, config);