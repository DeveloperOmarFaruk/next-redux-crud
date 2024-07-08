/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["internetdevels.com"],
  },

  env: {
    REACT_APP_URL: "https://6679422c18a459f6394edd18.mockapi.io/crud",
  },
};

export default nextConfig;
