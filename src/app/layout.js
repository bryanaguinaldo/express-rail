import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

export const metadata = {
    title: "Express Rail",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
