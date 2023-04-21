import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AiOutlineEye } from "react-icons/ai";
import { clsx } from "clsx";
import Container from "@/components/common/Container";
import { BsFillEyeSlashFill } from "react-icons/bs";
import React from "react";

interface AccordionItem {
  header: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    header: "Will there be a mobile app?",
    content:
      "Absolutely! Our company recognizes the growing importance of mobile technology, and we're committed to providing our users with the best possible experience across all platforms. Once our mobile app is in development we'll be sure to keep you informed.",
  },
  {
    header: "Is it free",
    content:
      "Our goal is to make our platform as widely available as possible, and to do that, we've made the decision to offer our service for free. We believe that our users should be able to take advantage of our offerings without worrying about any financial burdens.",
  },

  {
    header: "How do I contact customer support?",
    content:
      `We value your feedback and are committed to providing excellent customer service. To contact our customer care team, please send an email to temperaturecaleb@gmail.com. Our team of experts is always ready to assist you with any questions or concerns you may have.`,
  },

  {
    header: "How do I create nested folders?",
    content:
      " While this feature is not available in our MVP, we're working diligently to provide users the ability to create nested folders through our platform. As soon as this feature becomes available, we'll be sure to inform you!",
  },
];

interface AccordionProps { }

const Accordion = (props: AccordionProps) => {
  return (
    <Container className="">
      <h3 className="text-center mb-12">Frequently Asked Questions</h3>
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
                <span className="font-medium  text-subdue text-base">
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
              <div className="text-md text-gray-500">{content}</div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </Container>
  );
};

export { Accordion };
