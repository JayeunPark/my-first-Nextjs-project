import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata = {
  title: "Books",
  description: "Next.js project created by PJeun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
