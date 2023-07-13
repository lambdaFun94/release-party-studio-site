import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import "../index.css";

import Description from "../components/Description";
import HeaderComponent from "../components/HeaderComponent";
import VStack from "../components/VStack";
import Venue from "../components/Venue";
import "../index.css";

export const config: TemplateConfig = {};

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export default function Product() {
  return (
    <VStack>
      <HeaderComponent
        bgImageUrl={`https://d3m889aznlr23d.cloudfront.net/img/events/id/458/458748298/assets/ac64299a13bcc2c97b8355c679784ab0.Press-Lounge-1.jpeg`}
        ctaLabel={`RSVP`}
        subtitleFontColor="gray-100"
        subtitleFontSize="xl"
        subtitleFontWeight=""
        subtitle={`THE PRESS LOUNGE 653 11TH AVENUE NEW YORK NY`}
        titleFontColor="gray-100"
        titleFontSize="5xl"
        titleFontWeight="medium"
        title={`✨THE SUMMER '23 RELEASE   MASQUERADE SOIRÉE ✨`}
        ctaFontColor="blue-200"
        ctaFontSize=""
        ctaFontWeight=""
        buttonBgColor={`gray-400`}
        buttonHref={`yext.com`}
      />
      <Description
        spacing="mb-4"
        descriptionPadding="px-6"
        titlePadding="py-4"
        align="center"
        description={`Get ready to don your masks and let the enchantment begin! We're thrilled to invite you to our highly anticipated Summer '23 Release Masquerade Soiree! It's time to celebrate our achievements and embrace the magic of the season together!  This unforgettable evening promises to be an absolute delight! We'll have an incredible lineup of entertainment, tantalizing food, and an ambiance that will transport you to a world of mystery and allure. Let loose on the dance floor, indulge in mouthwatering treats, and create memories that will last a lifetime.`}
        title={`✨THE SUMMER '23 RELEASE✨  🎭 MASQUERADE SOIRÉE 🎭 `}
        paragraphFontWeight=""
        paragraphFontSize=""
        paragraphFont="sans"
        titleFontWeight="bold"
        titleFontSize="3xl"
        titleFont=""
        backgroundColor={`gray-200`}
      />
      <Venue
        title={{
          title: `Venue`,
          fontSize: "text-2xl",
          fontWeight: "font-bold",
          color: "text-gray-800",
        }}
        address={{
          addressee: `The Press Lounge`,
          addressLine1: `653 11th Avenue`,
          addressLine2: `New York, NY, 10036`,
          fontSize: "2xl",
          fontWeight: "medium",
          color: "indigo-200",
        }}
        subtitle={{
          subtitle: `The Press Lounge is attached to the Ink 48 Hotel - The Press Lounge has a dedicated entrance to the left of the hotel doors. `,
          fontSize: "text-sm",
          fontWeight: "font-medium",
          color: "text-gray-500",
        }}
        backgroundColor="bg-gray-200"
        padding="p-6"
        spacing="mb-6"
      />
      <HeaderComponent
        buttonHref={``}
        buttonBgColor={``}
        bgImageUrl={`https://d3m889aznlr23d.cloudfront.net/img/events/id/458/458748298/assets/674fd323d5f52fdbd94c05a52dbdffcb.press-lounge-3.jpeg`}
        ctaFontColor=""
        ctaFontSize=""
        ctaFontWeight=""
        ctaLabel={``}
        subtitleFontColor=""
        subtitleFontSize=""
        subtitleFontWeight=""
        subtitle={``}
        titleFontColor=""
        titleFontSize=""
        titleFontWeight=""
        title={``}
      />
    </VStack>
  );
}
