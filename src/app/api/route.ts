// This route is disabled for static export (GitHub Pages)
// Re-enable if deploying to a serverless platform

export const dynamic = "force-static";

export function GET() {
  return Response.json({ message: "Static export mode" });
}
