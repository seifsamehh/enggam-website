"use client";

import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/footer.scss";

const Footer = () => {
  // date
  const currentYear = new Date().getFullYear();
  // share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ENGGAM",
          text: "Check out our website!",
          url: "https://enggam-website.vercel.app/",
        });
        console.log("Website shared successfully");
      } catch (error) {
        console.error("Error sharing website:", error);
      }
    } else {
      console.warn("Web Share API not supported");
    }
  };
  return (
    <footer className="footer">
      <div className="up flex justify-between items-start min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-2 md:gap-0">
        <div className="max-w-xs footer-about">
          <h3 className={`${raleway.className} text-3xl mb-4`}>ENGGAM</h3>
          <p>
            Enggam is a Gift Card Company located in Egypt. we sell all prepaid
            cards like:- iTunes cards, google play cards, PNS cards, Xbox cards,
            Razer gold cards, Amazon cards, steam cards,and much more. Our
            Purpose is making easy to get all Gift Cards safe and fast.
          </p>
        </div>
        <div className="footer-social">
          <h3 className={`${raleway.className} text-3xl mb-4`}>
            Keep In Touch
          </h3>
          <div className="social-links flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap">
            {/* facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=100095357415380"
              target="_blank"
            >
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z" />
              </svg>
            </Link>
            {/* whatsapp */}
            <Link href="https://wa.me/+201014402598" target="_blank">
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z" />
              </svg>
            </Link>
            {/* instgram */}
            <Link href="https://www.instagram.com/enggam729/" target="_blank">
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z" />
              </svg>
            </Link>
            {/* twitter */}
            <Link href="https://twitter.com/enggam729" target="_blank">
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z" />
              </svg>
            </Link>
            {/* telegram */}
            <Link href="https://t.me/+201014402598" target="_blank">
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-9.641-2.617c-.973.405-2.918 1.242-5.833 2.512-.472.188-.721.373-.744.553-.037.303.344.423.863.587l.219.069c.51.166 1.197.36 1.554.367.325.008.686-.125 1.085-.4 2.723-1.838 4.13-2.767 4.217-2.787.063-.015.15-.033.207.02.06.051.053.15.047.176-.038.161-1.534 1.551-2.308 2.271-.241.225-.412.384-.447.42a10.52 10.52 0 0 1-.235.233c-.475.457-.83.8.018 1.36.41.27.737.491 1.063.713.355.243.71.484 1.17.787.116.075.229.156.338.233.413.296.787.56 1.246.518.267-.025.543-.275.683-1.025.332-1.771.983-5.607 1.133-7.189.01-.131.004-.263-.016-.393a.421.421 0 0 0-.143-.272.658.658 0 0 0-.387-.116c-.375.006-.954.207-3.73 1.363Z" />
              </svg>
            </Link>
            {/* gmail */}
            <Link href="mailto:enggam729@gmail.com" target="_blank">
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.4 7.2a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v9.6a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V7.2ZM4.8 6a1.2 1.2 0 0 0-1.2 1.2v.26L12 12.5l8.4-5.04V7.2A1.2 1.2 0 0 0 19.2 6H4.8Zm15.6 2.86-5.65 3.39 5.65 3.476V8.859Zm-.04 8.25-6.768-4.165L12 13.9l-1.59-.954-6.77 4.164A1.2 1.2 0 0 0 4.8 18h14.4a1.2 1.2 0 0 0 1.159-.888ZM3.6 15.727l5.65-3.477L3.6 8.86v6.867Z" />
              </svg>
            </Link>
            {/* share */}
            <button onClick={handleShare}>
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.875 3.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Zm-10.625 5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM18.875 17a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="footer-address">
          <h3 className={`${raleway.className} text-3xl mb-4`}>Address</h3>
          <p>Made With &#x2764; From Egypt</p>
        </div>
      </div>
      <div className="bottom flex justify-between items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-2 md:gap-0 min-[290px]:mt-4 md:mt-0">
        <div className="left">
          <p>Copyright &copy; {currentYear} - ENGGAM</p>
        </div>
        <div className="middle flex min-[290px]:justify-start md:justify-center items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap">
          <Image
            src="/visa.webp"
            alt="visa"
            aria-label="visa"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <Image
            src="/MasterCard.webp"
            alt="Master Card"
            aria-label="Master Card"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <Image
            src="/webMoney.webp"
            alt="web money"
            aria-label="web money"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <Image
            src="/Payser-Dark.webp"
            alt="payser dark"
            aria-label="payser dark"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <Image
            src="/fawryMoney.webp"
            alt="fawry money"
            aria-label="fawry money"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <Image
            src="/americaMoney.webp"
            alt="america money"
            aria-label="america money"
            width={50}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
        </div>
        <div className="flex items-center justify-center gap-2 right">
          <Link href="/profile/privacy-policy">Privacy Policy</Link>
          <Link href="https://enggam-website-docs.vercel.app/" target="_blank">
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
