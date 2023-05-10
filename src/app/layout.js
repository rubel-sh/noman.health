import PrimaryHeader from "@/components/Shared/PrimaryHeader";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
    title: "Noman Health",
    description: "Helping doctors digitize their practice",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={dm_sans.className}>
                <PrimaryHeader />
                {children}
                <Footer />
            </body>
        </html>
    );
}
