import { Inter, Outfit } from 'next/font/google';
import Navbar from './components/Navbar';



// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata = {
  title: 'Travelastic - Your Journey Begins Here',
  description: 'Discover extraordinary destinations and create unforgettable memories with Travelastic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link 
          rel="stylesheet" 
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" 
        />
      </head>
      <body className={inter.className}>
        {/* Stars Background */}
        <div className="main-wrapper">
          
          <Navbar />
          <main>{children}</main>
        </div>

        {/* Add your footer component here if needed */}
      </body>
    </html>
  );
}