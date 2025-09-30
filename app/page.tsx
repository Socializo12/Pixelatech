
import "./globals.css";
import "../component/style.css"
import Home  from "./pages/home/page"
export const metadata = {
  title: "Texas AI Marketing Agency | AI Agents, Google Ads & Lead Gen Experts",
  description:
    "Texas businesses: Get more calls, customers, and sales with Socializo AI. #1 AI-powered agency for local growth.",
};
export default function Page() {
  return (
    <>
    <div className="">
      <Home />

    </div>
    </>
  );
}
