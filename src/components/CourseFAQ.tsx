'use client';

import type { FAQ } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CourseFAQProps {
  faqs: FAQ[];
}

export default function CourseFAQ({ faqs }: CourseFAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-foreground hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
