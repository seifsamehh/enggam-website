import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/support.scss";

export default function SupportSection() {
  return (
    <section
      className="support overflow-hidden min-h-screen flex justify-center items-center flex-col gap-8"
      id="support"
    >
      <div>
        <h2
          className={`${raleway.className} min-[290px]:text-5xl md:text-7xl text-center bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent`}
        >
          Need some help?
        </h2>
        <div className="flex justify-center items-center min-[290px]:flex-col md:flex-row gap-4 my-6">
          <div className="support-boxs flex justify-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:mx-4 md:mx-0 gap-6">
            <div className="box bg-[#0056b3] text-white px-4 rounded-md min-[290px]:w-full md:w-96 h-96 flex justify-center items-start gap-8 flex-col">
              <div className="icon">
                <Image
                  src="https://i.imgur.com/ZwuWG0Y.png"
                  alt="Fast Free Shipping Codes"
                  aria-label="Fast Free Shipping Codes"
                  width={100}
                  height={100}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                />
              </div>
              <div className="title">
                <h3 className={`${raleway.className} text-2xl`}>
                  Fast Free Shipping Codes
                </h3>
              </div>
              <div className="description">
                <p>Orders ( Codes ) Delivered By Email</p>
              </div>
            </div>
            <div className="box bg-[#0056b3] text-white px-4 rounded-md min-[290px]:w-full md:w-96 h-96 flex justify-center items-start gap-8 flex-col">
              <div className="icon">
                <Image
                  src="https://i.imgur.com/P1RqZjj.png"
                  alt="Secure Payment"
                  aria-label="Secure Payment"
                  width={100}
                  height={100}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                />
              </div>
              <div className="title">
                <h3 className={`${raleway.className} text-2xl`}>
                  Secure Payment
                </h3>
              </div>
              <div className="description">
                <p>We Provide high Securely Payment Gateways</p>
              </div>
            </div>
            <div className="box bg-[#0056b3] text-white px-4 rounded-md min-[290px]:w-full md:w-96 h-96 flex justify-center items-start gap-8 flex-col">
              <div className="icon">
                <Image
                  src="https://i.imgur.com/TgnY8M5.png"
                  alt="Online Support 24/7"
                  aria-label="Online Support 24/7"
                  width={100}
                  height={100}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                />
              </div>
              <div className="title">
                <h3 className={`${raleway.className} text-2xl`}>
                  Online Support 24/7
                </h3>
              </div>
              <div className="description">
                <p>Contact with us any time though our channels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
