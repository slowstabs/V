import './globals.css';

export const metadata = {
  title: 'Vikhyat - Portfolio',
  description: 'Minimalist designer portfolio showcasing CTF writeups and wins.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="logo">VIKHYAT</div>
          <div className="nav-links">
            <a href="/">Gallery</a>
            <a href="/writeups">Writeups</a>
            <a href="/wins">Wins</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
