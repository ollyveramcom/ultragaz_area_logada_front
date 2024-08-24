/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Configura a saída para o modo standalone
  swcMinify: false, // Habilita a minificação com SWC
  poweredByHeader: false, // Desativa o cabeçalho X-Powered-By
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true, // Redirecionamento permanente
      },
    ];
  },
};

export default nextConfig;
