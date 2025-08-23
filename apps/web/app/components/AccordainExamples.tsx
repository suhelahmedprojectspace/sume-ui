"use client";
import React from "react";
import { Accordion } from "@sume/ui/components/Accordian";
import { Info, HelpCircle } from "lucide-react";

export default function AccordionExamplePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 space-y-12">
      {/* Default Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Default Variant (Single Expand)</h2>
        <Accordion defaultOpenIndexes={[0]} variant="default">
          <Accordion.Item>
            <Accordion.Trigger>What is your refund policy?</Accordion.Trigger>
            <Accordion.Content>
              We offer a 30-day money-back guarantee on all purchases. Simply
              contact our support team and we’ll process your refund promptly.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Do you offer customer support?</Accordion.Trigger>
            <Accordion.Content>
              Yes, we have 24/7 email support and a live chat team available on weekdays.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Minimal Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Minimal Variant (Multiple Expand)</h2>
        <Accordion multiple defaultOpenIndexes={[0]} variant="minimal" showControls>
          <Accordion.Item>
            <Accordion.Trigger icon={<Info className="w-5 h-5" />} chevronPosition="left">
              How does billing work?
            </Accordion.Trigger>
            <Accordion.Content>
              Billing occurs monthly on the date you subscribed. You can cancel at any time.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger icon={<HelpCircle className="w-5 h-5" />} chevronPosition="left">
              Can I change my plan later?
            </Accordion.Trigger>
            <Accordion.Content>
              Absolutely! You can upgrade or downgrade your plan at any time from your account settings.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Cards Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Cards Variant</h2>
        <Accordion defaultOpenIndexes={[1]} variant="cards">
          <Accordion.Item>
            <Accordion.Trigger>Do you provide documentation?</Accordion.Trigger>
            <Accordion.Content>
              Yes! Our detailed documentation covers everything from setup to advanced features.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is there an API?</Accordion.Trigger>
            <Accordion.Content>
              We provide a fully documented REST API as well as GraphQL endpoints.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Glass Variant */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Glass Variant</h2>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl">
          <Accordion multiple defaultOpenIndexes={[0]}  showControls>
            <Accordion.Item>
              <Accordion.Trigger>Do you offer team accounts?</Accordion.Trigger>
              <Accordion.Content>
                Yes, team accounts allow multiple users to collaborate with role-based permissions.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger>Can I export my data?</Accordion.Trigger>
              <Accordion.Content>
                You can export your data in CSV or JSON format anytime from the dashboard.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
