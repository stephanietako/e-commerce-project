export const metadata = {
  title: "Palm Trees Affair",
  description: "E-commerce projet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
