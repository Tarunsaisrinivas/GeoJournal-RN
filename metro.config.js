// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

// Fix: Ensure resolver config exists before modifying
defaultConfig.resolver = {
  ...defaultConfig.resolver,
  sourceExts: [...defaultConfig.resolver.sourceExts, "cjs"],
  unstable_enablePackageExports: false,
};

// Pass the updated config to NativeWind
module.exports = withNativeWind(defaultConfig, {
  input: "./global.css", // Ensure this file exists
});
