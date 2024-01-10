"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import HeaderHome from "@/lib/HeaderHome";
import Footer from "@/common/Footer";
import { useState } from "react";
import "../../../../../styles/feedback.scss";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function page() {
  // model
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // Handle form submission

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendFeedback = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/sendFeedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    console.log(await response.json());
  };
  return (
    <>
      <HeaderHome />
      <section className="feedback overflow-hidden min-h-screen flex justify-center items-center">
        <div className="feedback-content flex justify-center items-center min-[290px]:flex-wrap-reverse md:flex-nowrap bg-white rounded-md p-4 min-[290px]:gap-4 md:gap-0">
          <div className="left w-full">
            <Image
              src="/feedback.svg"
              alt="feedback"
              aria-label="feedback"
              width={700}
              height={700}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="right w-full">
            <h1 className={`${raleway.className} text-7xl text-[#ff474d]`}>
              Feedback
            </h1>
            <p className="max-w-2xl my-8">
              You can send everything that is required in order to give
              irrigation in the use of the site in order to develop the site can
              be shared with what is there that makes the site easier and
              simpler and develop every day on the site in order to make it the
              largest site in order to use our site, which makes it easy and
              simple and make it the largest in the development of the site and
              identify any defects and features of the site and share it with
              each other to make the site fast and effective in order to use our
              site and ease in order to develop daily The site has everyone's
              opinion is more important to us and your opinion should be given.
            </p>
            <Button
              onPress={onOpen}
              title="Give Us Your Feedback"
              className="cursor-pointer bg-[#0056b3] text-white w-fit px-4 py-2 rounded-md"
            >
              Give Us Your Feedback
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="2xl"
              classNames={{
                backdrop:
                  "bg-gradient-to-t from-cyan-700 to-cyan-300/20 backdrop-opacity-20",
              }}
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    y: -20,
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  },
                },
              }}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <form onSubmit={sendFeedback}>
                    <ModalHeader className="flex flex-col gap-1">
                      <h4 className={`${raleway.className} text-2xl`}>
                        Feedback
                      </h4>
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter your email"
                        isRequired
                      />
                      <Textarea
                        label="Feedback"
                        placeholder="Enter your message"
                        className="max-w-full"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button type="submit" onPress={onClose}>
                        send
                      </Button>
                    </ModalFooter>
                  </form>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
