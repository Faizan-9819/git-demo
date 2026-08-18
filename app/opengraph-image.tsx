import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Growth Rocket - Not just a website. A complete business system.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/figma/icons/logos/logoblack.svg"),
  );
  const logoBase64 = `data:image/svg+xml;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={468} height={141} alt="Growth Rocket" />
        <p
          style={{
            fontSize: 28,
            color: "#667085",
            margin: 0,
            fontFamily: "sans-serif",
          }}
        >
          Not just a website. A complete business system.
        </p>
      </div>
    ),
    size,
  );
}
