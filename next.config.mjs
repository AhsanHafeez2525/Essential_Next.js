/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/Login",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
