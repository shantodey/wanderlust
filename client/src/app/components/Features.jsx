import { Card } from "@heroui/react";
import { ShieldCheck, Map, Headphones } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#13a3ca]" />,
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: <Map className="w-8 h-8 text-[#13a3ca]" />,
    title: "Expert Guides",
    description: "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#13a3ca]" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#e0f4f8] py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-zinc-900 mb-2">Why Choose Wanderlust</h2>
      <p className="text-zinc-500 text-sm mb-12">Your trusted partner for exceptional travel experiences</p>

      <div className="flex flex-wrap justify-center gap-5 mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="w-100 bg-white shadow-sm border border-zinc-100">
            <Card.Content className="p-8 text-left flex flex-col gap-3">
              {feature.icon}
              <h3 className="text-base font-semibold text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;