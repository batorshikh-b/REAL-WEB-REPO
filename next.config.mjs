/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    // The dedicated pages were removed when the site went back to
    // single-page scrolling; keep their old URLs working.
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/partners", destination: "/#partners", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
