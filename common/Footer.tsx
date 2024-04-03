"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/footer.scss";

const Footer = () => {
  // model
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // date
  const currentYear = new Date().getFullYear();
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
              aria-label="Facebook"
              title="Facebook"
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
            <Link
              href="https://wa.me/+201014402598"
              target="_blank"
              aria-label="Whatsapp"
              title="Whatsapp"
            >
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
            <Link
              href="https://www.instagram.com/enggam.co/"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
            >
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
            <Link
              href="https://twitter.com/enggam729"
              target="_blank"
              title="Twitter"
              aria-label="Twitter"
            >
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
            <Link
              href="https://t.me/+201014402598"
              target="_blank"
              title="Telegram"
              aria-label="Telegram"
            >
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
            <Link
              href="mailto:enggam729@gmail.com"
              target="_blank"
              title="Gmail"
              aria-label="Gmail"
            >
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
          <p>
            Powered by <span>Ali Nasr</span>
          </p>
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
          <Button color="primary" onPress={onOpen}>
            Privacy Policy
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={"inside"}
            isDismissable={false}
            size="5xl"
            backdrop="blur"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className="mt-8">
                    <div className="services">
                      <h5 className="text-[#0056b3] font-black text-2xl">
                        The Services are provided by Enggam
                      </h5>
                      <div className="def">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          1. Definitions
                        </h6>
                        <p>
                          In these Terms of Service, the following words and
                          expression shall have the following meanings unless
                          the context otherwise requires:
                          <br />
                          Account: means your account duly registered with
                          EgyCards to facilitate you using the Services
                          available on the Portals (or any of them);
                          <br />
                          Buyer: means a person who purchases items on the
                          Portals;
                          <br />
                          Gift Card: means an electronic gift card purchased on
                          any of the Portals which contains a stored value
                          available for redemption on the Portals;
                          <br />
                          Items: means the goods and services listed by you for
                          sale on the Portals and “Item” shall mean any one of
                          them;
                          <br />
                          Parties: means collectively, Enggam and you and
                          “Party” shall mean any one of them;
                          <br />
                          Portals: means collectively, the web portals presently
                          known as Enggam.com and such other web portals of
                          Enggam administered and managed by Enggam;
                          <br />
                          Services: means the services provided by Enggam on the
                          Portals, including, without limitation, reselling and
                          retailing online games and related merchandises, games
                          publishing, online marketplace for sale of Items,
                          subject to the conditions in these Terms of Service;
                          <br />
                          Purchased Item: means your item listed on the Portals
                          purchased by the Buyer;
                          <br />
                          Store Credit: means the electronic credit value
                          available in the Account at any time;
                          <br />
                          Terms of Service : means these Terms of Service
                          governing the use of the Services by you as may be
                          amended at any time and from time to time as and when
                          Enggam shall in its absolute discretion deems
                          necessary and shall include: (i) any rules,
                          procedures, Terms of Service for products, services or
                          facilities, as determined by Enggam from time to time;
                          and (ii) any documents, directives, correspondence and
                          agreements referred to in these Terms of Service and
                          forming a part hereof, together with any amendments
                          made at any time or from time to time to any of the
                          foregoing;
                          <br />
                        </p>
                      </div>
                      <div className="license">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          2. Licence to Use
                        </h6>
                        <p>
                          In consideration of you agreeing to these Terms of
                          Service and your continuing observance and compliance
                          of these Terms of Service, Enggam hereby grants you a
                          non-exclusive, non-transferable license to access the
                          Portals and use the Services upon the terms and
                          subject to the conditions stated herein.
                        </p>
                      </div>
                      <div className="representations">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          3. Representations and Warranties
                        </h6>
                        <p>
                          Each time when you access the Portals (or any of
                          them), you irrevocably and unconditionally represents
                          and warrants that: You are above 18 years old. Should
                          you be less than 18 years old, your parents are aware
                          and have consented to you accessing the Portals and
                          using the Services; Your personal information and the
                          documentation submitted in this respect, including,
                          without limitation, your full name, telephone number,
                          correspondence address and email address, are true and
                          accurate. You shall forthwith notify us in writing of
                          any changes in your personal information; You shall
                          keep the password to the Account secure and
                          confidential. You shall not at any time and under any
                          circumstances reveal or disclose the your password to
                          the Account to any unauthorized party and shall take
                          all steps to prevent the disclosure of the password to
                          the Account to any unauthorized party; Save as
                          otherwise permitted by Enggam, you shall not, directly
                          or indirectly, use the Services for any commercial
                          purposes; You shall not to use the Portals or the
                          Services (or any of them) to conduct any fraudulent,
                          immoral or illegal activities or such activities that
                          may infringe the intellectual property rights of third
                          parties; You shall not use any intellectual property
                          belonging to EgyCards or any publishers listed on the
                          Portals, including, without limitation, trademarks or
                          trade names, whether registered or not, without the
                          prior written consent of Enggam You shall not be
                          disruptive, be offensive or be a nuisance in any
                          manner whatsoever to other users of the Portals or the
                          employees of Enggam. You shall not directly or
                          indirectly recruit and/or poach any customers obtained
                          from the usage of the portals.
                        </p>
                      </div>
                      <div className="use-of-services">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          4. Use of Services
                        </h6>
                        <p>
                          You shall procure, at your own costs and expenses, the
                          requisite equipment and software to connect and access
                          the Portals and the ensuing use of the Services. You
                          shall bear all charges and fees imposed by third
                          parties in relation to and in connection with you
                          connecting your equipment to the Portals (or any of
                          them)
                          <br />
                          It is your primary responsibility to ensure that you
                          are acquainted with the guidelines and procedures for
                          the use of the Services that Enggam may issue from
                          time to time. Enggam shall not be liable for any
                          errors, losses or damages caused by your use of the
                          Services.
                          <br />
                          It is your responsibility to secure the information of
                          your Account. Any notification or confirmation
                          received by Enggam from your Account shall be deemed
                          to have been issued by you notwithstanding that such
                          notification or confirmation may have been issued by a
                          third party, whether authorized or otherwise, and you
                          shall be bound by such notification or confirmation.
                          <br />
                          Enggam shall not be liable for acting on the
                          notification or confirmation sent through your
                          Account. Enggam shall not be obliged to investigate
                          the authenticity or authority of persons effecting the
                          notification or confirmation or verify the
                          completeness of such notification or confirmation.
                          Such notification or confirmation shall be deemed
                          irrevocable and binding on you upon receipt by Enggam
                          notwithstanding any error, fraud, forgery and lack of
                          clarity or misunderstanding in respect of the terms of
                          such notification or confirmation. You shall
                          immediately notify Enggam upon receipt of incomplete,
                          garbled or inaccurate data or information from Enggam.
                          You shall also immediately notify Enggam upon receipt
                          of any data or information which is not intended for
                          you and you shall delete such data or information from
                          your Account.
                          <br />
                          You acknowledge and agree that Enggam may at its
                          absolute discretion refuse or permit you to use the
                          Services without giving any reason or notice thereof.
                          <br />
                          Unless otherwise permitted by Enggam in writing, you
                          shall not upload, post, email transmit or otherwise
                          make available any unauthorized or illegal activities
                          on the Portals or directly to other users of the
                          Portals.
                          <br />
                          You shall not upload, post, email, transmit or in any
                          other manner whatsoever make available any material
                          that contains software viruses or any other computer
                          code, files or programs designed to interrupt, destroy
                          or limit the functionality of any computer software or
                          hardware or telecommunication equipment, including,
                          without limitation, the Portals.
                          <br />
                          You irrevocably and unconditionally allow and permit
                          Enggam to send to your Account updates on services and
                          events offered or provided by Enggam.
                        </p>
                      </div>
                      <div className="payment">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          5. Payment
                        </h6>
                        <p>
                          You may pay for the Services in such currency that is
                          available on the Portals in accordance with the
                          prevailing exchange rate determined by Enggam at its
                          absolute discretion.
                          <br />
                          You shall be solely liable to make payments and
                          applicable taxes, if any, in relation to and in
                          connection with the usage of the Services (or any of
                          them) through the Account.
                          <br />
                          Enggam shall have the absolute discretion to cancel
                          any payment request made by you without assigning any
                          reasons whatsoever.
                          <br />
                          Enggam shall be entitled to vary or modify or remove
                          the modes of payment available on the Portals (or any
                          of them) at any time without prior notice to you.
                          <br />
                          You are responsible for any fees, taxes or other costs
                          associated with the purchase and delivery of your
                          items resulting from charges imposed by your
                          relationship with payment services providers or the
                          duties and taxes imposed by your local customs
                          officials or other regulatory body.
                          <br />
                          For customer service inquiries or disputes, You may
                          contact us by email at
                          <br />
                          <Link
                            href="mailto:enggam729@gmail.com"
                            target="_blank"
                            className="text-[#0056b3]"
                          >
                            enggam729@gmail.com
                          </Link>
                          <br />
                          Where possible, we will work with you and/or any user
                          selling on our website, to resolve any disputes
                          arising from your purchase.
                          <br />
                          Enggam uses a third-party payment interchange PayU and
                          Enggam to manage all our payment processors. Your use
                          of PayU and Enggam by PayU and Enggam Terms and
                          Conditions.
                        </p>
                      </div>
                      <div className="availability">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          6. Availability of Services
                        </h6>
                        <p>
                          The Services are usually available on a daily basis
                          unless otherwise specified herein.
                          <br />
                          There may be certain times that the Services may not
                          be available due to maintenance or malfunction of the
                          Portals or such other reasons beyond the control of
                          Enggam. Enggam makes no warranty that the Services
                          will be available at the times stated herein.
                          <br />
                          Unless otherwise provided in these Terms of Service,
                          Enggam shall be entitled at its absolute discretion,
                          without notice to you, to change the procedures, the
                          mode of operation of the Services at any time and from
                          time to time for any reason whatsoever.
                          <br />
                          Notwithstanding any provisions to the contrary in
                          these Terms of Service, Enggam shall be entitled to:
                          <br />
                          immediately terminate, discontinue, withdraw or
                          suspend your use of the Services without notice;
                          <br />
                          impose conditions or restrictions on your use of the
                          Service without notice.
                        </p>
                      </div>
                      <div className="store-credit">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          7. Store Credit
                        </h6>
                        <p>
                          You can maintain Store Credit in the Account before
                          you use the Services. Store Credit can be topped-up in
                          the Account through the payment methods listed on the
                          Portals. Enggam shall, as and when it deems fit,
                          amend, modify, remove or add any Store Credit or Store
                          Credit account without prior notice to you.
                        </p>
                      </div>
                      <div className="limitation">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          8. Limitation of Liability
                        </h6>
                        <p>
                          You agree and confirm that you shall not hold Enggam,
                          its employees, agents or licensees, liable for any
                          special, incidental or consequential damages arising
                          out of and in relation to the Services or these Terms
                          of Service.
                        </p>
                      </div>
                      <div className="intellectual">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          9. Intellectual Property Rights
                        </h6>
                        <p>
                          All copyrights, trade marks, service marks belong to
                          the corresponding owners/publishers and Enggam is not
                          related or associated to any of the said
                          owners/publishers in any respect. All services offered
                          on the Portals are offered by Enggam, not the
                          owners/publishers.
                        </p>
                      </div>
                      <div className="reliability">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          10. Reliability of Portals
                        </h6>
                        <p>
                          You are aware that all transactions conducted on the
                          Portals are through telecommunication and data
                          network.
                          <br />
                          You are fully aware that your receipt of the
                          notification from Enggam and vice versa may be delayed
                          or prevented by factors affecting the relevant service
                          providers and other relevant parties. You accept that
                          Enggam cannot guarantee the prompt delivery of such
                          notification or confirmation.
                          <br />
                          You acknowledge and confirm that you shall take all
                          steps and measures to check and verify the transaction
                          history of your Account.
                        </p>
                      </div>
                      <div className="account">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          11. Account
                        </h6>
                        <p>
                          You shall immediately notify Enggam if you are aware
                          or believe your Account has been hacked or
                          compromised. You shall be liable for all transactions
                          conducted through your Account at any time prior to
                          the receipt by Enggam of your notification.
                        </p>
                      </div>
                      <div className="disclosure">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          12. Disclosure of Information
                        </h6>
                        <p>
                          Enggam shall be entitled and you irrevocably and
                          unconditionally consents and authorizes Enggam to the
                          extent permitted by law, to disclose or release any
                          information pertaining to you or your transactions
                          through the Portals to such extent that Enggam may at
                          its absolute discretion deem fit to:
                          <br />
                          such persons as Enggam may be required to disclose
                          under the applicable law; such other persons or entity
                          pursuant to any governmental directive or order of the
                          court; any other party whomsoever as Enggam deems fit.
                          Enggam will not disclose your personal information to
                          any other party without prior notification to you.
                        </p>
                      </div>
                      <div className="laws">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          13. Applicable Laws and Regulations
                        </h6>
                        <p>
                          Your use of the Services shall be governed by the
                          jurisdiction where the contracting entity of Enggam is
                          domiciled. Where required, you shall obtain the
                          approval or consent or permission of the relevant
                          regulatory authorities prior to using the Services.
                          For cross-border transactions, you shall not violate
                          the laws existing in the countries involved in the
                          transaction.
                        </p>
                      </div>
                      <div className="suspension">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          14. Suspension, Termination, Cancellation of Services
                        </h6>
                        <p>
                          The Services (or any part thereof) may be cancelled by
                          Enggam at any time without prior notice to you. After
                          cancellation, the Services (or any part thereof) may
                          be reinstated in such manner and on such Terms of
                          Service as Enggam may at its absolute discretion
                          determine.
                          <br />
                          Enggam reserves the right at all times to suspend or
                          block access to and use of the Services (or any part
                          thereof) for any reason whatsoever and for any length
                          of time and upon any conditions that EgyCards may at
                          its absolute discretion determine.
                          <br />
                          Upon cancellation or termination of the Services (or
                          any part thereof):
                          <br />
                          all rights granted to you hereunder shall immediately
                          terminate and shall revert to Enggam;
                          <br />
                          you shall immediately pay to Enggam all outstanding
                          fees and charges due and owing to Enggam;
                          <br />
                          Enggam may at its absolute discretion, decide not to
                          act on any request received by Enggam after the
                          effective date of termination;
                          <br />
                          Enggam may at its absolute discretion, decide not to
                          act on any confirmation or request received by Enggam
                          between the date of notice is given to you and the
                          effective date of termination (if there is a lapse of
                          time between the two dates);
                          <br />
                          you hereby irrevocably and unconditionally authorises
                          Enggam to deduct all money due and owing by you to
                          MTCGAME (if any) from the moneys that are payable by
                          Enggam to you in respect of the delivered Purchased
                          Items.
                        </p>
                      </div>
                      <div className="notices">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          15. Notices
                        </h6>
                        <p>
                          All notices and documents required to be given by you
                          under these Terms of Service to Enggam shall be sent
                          to EgyCards by registered post to the Enggam address
                          listed on the Portals. Any notice or document sent by
                          you to Enggam shall be deemed served when such notice
                          or document is received by Enggam.
                          <br />
                          All notices and documents required to be given by
                          Enggam under these Terms of Service to you shall be
                          sent to you by any one of the following methods:
                          <br />
                          electronic mail to your last known electronic mail
                          address according to Enggam records;
                          <br />
                          posting the notice or communication on the Portals;
                          <br />
                          notices placed with or in any of Enggam written
                          communications to you;
                          <br />
                          notices placed through any media;
                          <br />
                          any manner of notification as Enggam may at its
                          absolute discretion determine.
                          <br />
                          Any notice or document or communication given by
                          Enggam to you shall be deemed to be served and
                          received by you on the day following the sending of
                          such notice or document.
                        </p>
                      </div>
                      <div className="waiver">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          16. Waiver And Severance
                        </h6>
                        <p>
                          Any failure by Enggam to enforce at any time or for
                          any period any one or more of these Terms of Service
                          shall not be a waiver of them or of the right at any
                          time subsequently to enforce these Terms of Service.
                          <br />
                          In the event that any provisions of these Terms of
                          Service is declared by any judicial or other competent
                          authority to be void, voidable, illegal or otherwise
                          unenforceable Enggam shall amend that provision in
                          such reasonable manner as would achieve the intention
                          of Enggam or at the discretion of Enggam it may be
                          severed from these Terms of Service and the remaining
                          provisions remain in full force and effect.
                        </p>
                      </div>
                      <div className="variation">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          17. Variation
                        </h6>
                        <p>
                          These Terms of Service may be modified, added to,
                          deleted or varied by Enggam by way of posting on the
                          Portals or in any such other manner as Enggam may in
                          its absolute discretion determine. You agree that
                          continued use of the Services shall constitute your
                          acceptance of these Terms of Service (as modified and
                          varied from time to time).
                        </p>
                      </div>
                      <div className="assignment">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          18. Assignment
                        </h6>
                        <p>
                          You may not assign its rights under these Terms of
                          Service without the prior written consent of MTCGAME.
                        </p>
                      </div>
                      <div className="binding-effect">
                        <h6 className="text-[#0056b3] font-black text-xl">
                          19. Binding Effect
                        </h6>
                        <p>
                          These Terms of Service shall be binding on your heirs,
                          personal and legal representatives, estate,
                          successors-in-title and permitted assigns (where
                          applicable) you.
                        </p>
                      </div>
                    </div>
                    <div className="privacy-policy">
                      <h5 className="text-[#0056b3] font-black text-2xl">
                        Privacy Policy
                      </h5>
                      <p>
                        Enggam knows that you care about your privacy and the
                        use of your personal information. This notice describes
                        our Privacy Policy. This Privacy Policy applies to
                        information we collect about you from any source and in
                        any way – through our Websites, applications or other
                        Internet based interactions, in our retail stores.
                      </p>
                      <p>
                        We Gather the Following Personal Information About
                        Guests:
                        <br />
                        Information That You Give Us: We receive and store any
                        information you enter on our Websites or that you give
                        us in any other way. You can choose not to provide
                        certain information, but this will limit your ability to
                        purchase products offered on the Websites, or to take
                        advantage of some features or promotions.
                      </p>
                      <p>
                        When you place an order with us online, in a store or in
                        any other way, your contact information is used to
                        communicate related information, such as order and
                        shipment confirmation, release date changes and requests
                        for more information to facilitate processing your
                        order. You may opt-out of these communications by
                        canceling your order.
                      </p>
                      <p>
                        We obtain information about you when you search, buy,
                        participate in a contest or questionnaire, , or
                        otherwise contact us or post information on our
                        Websites. For example, you provide information when you
                        search for a product; place an order through a Website
                        or provide information to update or create your account
                        with us (you may have more than one account if you have
                        used more than one email address when shopping with us);
                        communicate with us by phone, email, or otherwise;
                        complete a questionnaire or a contest entry form; create
                        any wish or gift list; participate in any forums or
                        discussion areas or product reviews; or create any
                        alerts or other email notification services we may offer
                        now or in the future. The information collected
                        typically includes your name, address, and phone
                        numbers; credit card information; people to whom
                        purchases have been shipped, including addresses and
                        phone number; content of reviews you may provide; emails
                        to us; and any other personal information that you
                        provide to us or post on the Websites.
                      </p>
                      <p>
                        The information we receive or can determine from your
                        interaction with our Websites includes your Internet
                        (IP) address; login and password information; email
                        address; web browser type and version; preferred
                        language; geographic location using IP address or the
                        GPS, wireless, or Bluetooth technology on your device;
                        operating system and computer platform; purchase
                        history, which we may aggregate with similar information
                        from other guests or keep in non-aggregated form; the
                        full Uniform Resource Locator (URL) clickstream to,
                        through, and from our Websites, including date and time;
                        one or more unique identifiers; products you viewed or
                        searched for; areas of our Websites you visited; and the
                        phone number you used to call our toll-free number. We
                        also may log the length of time of your visit and the
                        number of times you visit and purchase from us. We
                        assign you one or more unique identifiers to help keep
                        track of your future visits.
                      </p>
                      <p>
                        You contact us at Support@{" "}
                        <Link
                          href="mailto:enggam729@gmail"
                          target="_blank"
                          className="text-[#0056b3]"
                        >
                          enggam729@gmail.com
                        </Link>
                        if you wish to request change or removal of the
                        information collected.
                      </p>
                      <p>
                        Mobile location services: Certain stores may also
                        collect and use location information from mobile
                        devices. Location information allows us to learn more
                        about how guests use our stores to enhance the guest
                        experience and, in certain circumstances, deliver push
                        notifications and other content to your mobile device
                        when you are near, enter and move through our stores,
                        and send or provide you with offers and promotional
                        information that we believe may be of interest to you.
                        You may prevent or limit collection of location
                        information by turning off your mobile device or
                        antennas, such as WiFi or Bluetooth, and opting out of
                        location services on your device.
                      </p>
                    </div>
                    <div className="additional-terms">
                      <h5 className="text-[#0056b3] font-black text-2xl">
                        Additional Terms and Conditions; EULAs
                      </h5>
                      <p>
                        When you use Enggam Pay services provided by Enggam.COM
                        Limited (hereinafter referred to as the “Enggam Pay
                        services provider”) to make a purchase on our website,
                        responsibility over your purchase will first be
                        transferred to Egycards.COM Limited before it is
                        delivered to you. Enggam.COM is becoming Merchant of
                        Record over your purchase. Enggam Pay services provider
                        assumes primary responsibility, with our assistance, for
                        payment and payment related customer support. The terms
                        between Egycards Pay services provider and customers who
                        utilize services of Enggam Pay are governed by separate
                        agreements which can be found under Enggam.com
                        and-conditions and are not subject to the Terms on this
                        website.
                      </p>
                      <p>
                        In order to proceed the payment transaction, you
                        temporary entrusts the Enggam.COM with subject of the
                        transaction, and Enggam.COM takes responsibility for the
                        product and for the transaction processing.
                      </p>
                      <p>
                        With respect to customers making purchases through
                        Enggam Pay services provider checkout, (i) the Privacy
                        Policy of Enggam Pay services provider shall apply to
                        all payments and should be reviewed before making any
                        purchase, and (ii) the Enggam Pay services provider
                        Refund Policy shall apply to all payments unless notice
                        is expressly provided by the relevant supplier to buyers
                        in advance. In addition the purchase of certain products
                        may also require shoppers to agree to one or more
                        End-User License Agreements (or “EULAs”) that may
                        include additional terms set by the product supplier
                        rather than by Us or Enggam Pay services provider. You
                        will be bound by any EULA that you agree to.
                      </p>
                      <p>
                        You are responsible for any fees, taxes or other costs
                        associated with the purchase and delivery of your items
                        resulting from charges imposed by your relationship with
                        payment services providers or the duties and taxes
                        imposed by your local customs officials or other
                        regulatory body.
                      </p>
                      <p>
                        For customer service inquiries or disputes, You may
                        contact us by email at
                        <br />
                        Supprt@ enggam.com
                        <br />
                        Questions related to payments made through Enggam Pay
                        services provider payment should be addressed to
                        support@{" "}
                        <Link
                          href="mailto:enggam729@gmail"
                          target="_blank"
                          className="text-[#0056b3]"
                        >
                          enggam729@gmail.com
                        </Link>
                        <br />
                        Where possible, we will work with You and/or any user
                        selling on our website, to resolve any disputes arising
                        from your purchase.
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex justify-start">
                    <Button color="default" onPress={onClose}>
                      Agreed
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="https://enggam-website-docs.vercel.app/" target="_blank">
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
