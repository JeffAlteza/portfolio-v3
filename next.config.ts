import type { NextConfig } from "next";

// Extra dev origins (e.g. a LAN IP for phone testing): DEV_ORIGINS=192.168.1.22,10.0.0.5
const extraDevOrigins = (process.env.DEV_ORIGINS ?? "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", ...extraDevOrigins],
};

export default nextConfig;
