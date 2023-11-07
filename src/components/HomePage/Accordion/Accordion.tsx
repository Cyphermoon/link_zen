import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AiOutlineEye } from "react-icons/ai";
import { clsx } from "clsx";
import Container from "@/components/common/Container";
import { BsFillEyeSlashFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import AppConfig from "@/constants/app.constant";
import {
  pfDisplay,
  urbanist,
  lato,
  quicksand,
  raleway,
  montserrat,
} from "font";

interface AccordionItem {
  header: string;
  content: string | React.ReactNode;
}

const items: AccordionItem[] = [
  {
    header: "How does monetization work?",
    content:
      "Monetization on Linkzen allows content creators to earn income from their digital resources. Creators can upload files and set a price or subscription fee, we will provide a link you can share to get people to see it. When users pay to access the content you earn revenue",
  },
  {
    header: "What if I don't have anything to sell; can I use Linkzen?",
    content:
      "Yes, absolutely! Linkzen is not just for selling content; It's a versatile platform for managing and sharing all your digital resources. You can use it to bookmark websites, organize links, share files, create a portfolio or even promote your social media presence.",
  },
  {
    header: "Is Linkzen really worth it?",
    content:
      "Yes! Linkzen can be a valuable promotional tool. You can create a professional profile showcasing your contents, all in one place, making them easily accessible to your audience. Share your Linkzen profile link on social media, websites, or in your email. This simplifies resource promotion and make it more convenient for your audience to access and engage with your content",
  },
  {
    header: "How do I get paid for my sold content?",
    content:
      "It's simple! All you need to do is set up your payment details in your account settings. When users purchase your content, you'll receive payments directly through the payment method you provided. You can choose to get paid on per sales basis, weekly basis, monthly or even yearly basis",
  },

  {
    header: "Will there be a mobile app?",
    content:
      "Absolutely! we recognizes the growing importance of mobile technology, and we're committed to providing our users with the best possible experience across all platforms. Once our mobile app is in development we'll be sure to keep you informed.",
  },
  {
    header: "Is Linkzen free?",
    content:
      "Our goal is to make Linkzen as widely available as possible, and to do that, we've made the decision to offer our service for free. We believe that our users should be able to take advantage of our offerings without worrying about any financial burdens.",
  },

  {
    header: "How do I contact customer support?",
    content: (
      <p className={`my-2 ${montserrat.className}`}>
        We value your feedback and are committed to providing excellent customer
        service. To contact our customer care team, please send an email to{" "}
        <Link
          className="text-primary-700 underline text-md"
          href={`mailto:${AppConfig.mail}`}
        >
          {AppConfig.mail}
        </Link>{" "}
        We are always ready to assist you with any questions or concerns you may
        have.
      </p>
    ),
  },
];

interface AccordionProps {}

const Accordion = (props: AccordionProps) => {
  return (
    <Container className="">
      <h3
        className={`text-center mb-12 font-bold text-4xl ${raleway.className}`}
      >
        FAQ
      </h3>
      <AccordionPrimitive.Root
        type="single"
        defaultValue="item-1"
        collapsible
        className={clsx("space-y-4 w-full")}
      >
        {items.map(({ header, content }, i) => (
          <AccordionPrimitive.Item
            key={`header-${i}`}
            value={`item-${i + 1}`}
            className="rounded-lg"
          >
            <AccordionPrimitive.Header className="w-full">
              <AccordionPrimitive.Trigger
                className={clsx(
                  "AccordionTrigger",
                  "group",
                  "radix-state-open:rounded-xl radix-state-closed:rounded-lg",
                  "focus:outline-none",
                  "inline-flex w-full items-center justify-between px-4 py-5 text-left bg-primary rounded-t-lg shadow-md"
                )}
              >
                <span
                  className={`font-semibold  text-subdue text-base ${urbanist.className} text-lg`}
                >
                  {header}
                </span>
                <AiOutlineEye
                  className={clsx(
                    "Eye ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                  )}
                />
                <BsFillEyeSlashFill
                  className={clsx(
                    "Eye-slash ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400 hidden",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                  )}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="AccordionContent pt-1 w-full rounded-b-lg px-4 pb-3 bg-primary shadow-md">
              <div className="text-md text-gray-500">
                {typeof content === "string" ? (
                  <p className={`my-2 ${montserrat.className}`}>{content}</p>
                ) : (
                  content
                )}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </Container>
  );
};

export { Accordion };
