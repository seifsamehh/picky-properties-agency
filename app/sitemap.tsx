export default function sitemap(): { url: string; lastModified: Date }[] {
  const currentDate = new Date();

  const urls = ["https://picky-properties-agency.vercel.app/"];

  return urls.map((url) => ({
    url,
    lastModified: currentDate,
  }));
}
