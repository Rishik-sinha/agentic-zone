import React from "react";
import Marquee from "react-fast-marquee";
import * as Logos from "./TechLogos.jsx";

const logos = [
  { name: "Beehiiv", Component: Logos.BeehiivLogo },
  { name: "HubSpot", Component: Logos.HubSpotLogo },
  { name: "Make", Component: Logos.MakeLogo },
  { name: "GoogleCalendar", Component: Logos.GoogleCalendarLogo },
  { name: "Outlook", Component: Logos.OutlookLogo },
  { name: "OpenAI", Component: Logos.OpenAILogo },
  { name: "Slack", Component: Logos.SlackLogo },
  { name: "Bubble", Component: Logos.BubbleLogo },
  { name: "Botpress", Component: Logos.BotpressLogo },
  { name: "Discord", Component: Logos.DiscordLogo },
  { name: "Excel", Component: Logos.ExcelLogo },
  { name: "Asana", Component: Logos.AsanaLogo },
];

const Integrations = () => {
  const LogoTile = ({ logo }) => {
    const LogoComponent = logo.Component;
    return (
      <div className="flex items-center justify-center w-48 h-24 mx-8 group">
        <div className="flex items-center justify-center w-24 h-24 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-2xl p-4 transition-all duration-300 group-hover:bg-neutral-700 group-hover:border-green-500/50">
          <LogoComponent className="w-full h-full text-neutral-400 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Integrate with Your Favorite Tools
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Connect with hundreds of apps to automate any workflow imaginable,
          from simple notifications to complex, multi-step agentic processes.
        </p>
      </div>

      <div className="space-y-8">
        <Marquee speed={40} gradient={true} gradientColor={[0,0,0]} gradientWidth={150} pauseOnHover={true}>
          {logos.map((logo, index) => (
            <LogoTile key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </Marquee>

        <Marquee
          speed={40}
          gradient={true}
          gradientColor={[0,0,0]} 
          gradientWidth={150}
          pauseOnHover={true}
          direction="right"
        >
          {[...logos].reverse().map((logo, index) => (
            <LogoTile key={`${logo.name}-rev-${index}`} logo={logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Integrations;