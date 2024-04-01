import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.png"],
  manifest: {
    name: "Weather app",
    short_name: "Weather app",
    description: "An app that can show the weather forecast for your city.",
    icons: [
      {
        src: "./icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "./icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "./icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon",
      },
      {
        src: "./icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.png"],
      manifest: {
        name: "BankCo Banking System",
        short_name: "Bankco",
        description: "An app that help you unlock your financial possiblity.",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "icon",
          },
          {
            src: "favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "icon",
          },
        ],
        theme_color: "#22c55e",
        background_color: "#e8eac2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
      // workbox: {
      //   clientsClaim: true,
      //   skipWaiting: true,
      // },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
