import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metdata = {
  openGraph: {
    description: "Tobib.io Medical Assistant",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Tobib.ai Medical Assistance</title>
        <link
          rel="icon"
          href="https://th.bing.com/th/id/R.9d6134dbba07101d3e7cf015d69ab88a?rik=63nnUXyk1b9pJg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmedical-symbol-transparent-background%2fmedical-symbol-transparent-background-23.png&ehk=8LEMcQkkLCfsrv2R3godNSNhRs7pvlAIEJnlSFmvIgU%3d&risl=&pid=ImgRaw&r=0"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
