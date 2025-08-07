import React from 'react'; 
import { Button } from '@astra/ui';
import { Card, CardBody, CardFooter, CardHeader } from '@astra/ui';
import { Carousel, CarouselItem } from '@astra/ui';
import { Input } from '@astra/ui';
import { Mail, Lock,PyramidIcon } from "lucide-react";
import { Check, AlertCircle, Info, Bell, Star, Settings, Loader2 } from "lucide-react";
import ModalExamplePage from './components/ModalExamples';
import NavbarExamples from './components/NavbarExamples';
import DropDownExamples from './components/DropDownExamples';
import {Avatar} from "@astra/ui"
import { Badge } from '@astra/ui';

import KeybabMenuExamples from './components/KeybabMenu';
import StepProgessExamples from './components/StepProgessExamples';
const CardCarousel = () => {
  const cardData = [
    {
      title: "Premium Plan",
      description: "Access all features with our premium subscription. Perfect for power users and businesses.",
      price: "$29.99/mo",
      features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom domains"]
    },
    {
      title: "Team Plan",
      description: "Collaborate with your team members seamlessly. Includes everything in Premium plus team features.",
      price: "$49.99/mo",
      features: ["Everything in Premium", "Up to 10 team members", "Team dashboard", "Shared resources"]
    },
    {
      title: "Enterprise Plan",
      description: "For large organizations with custom needs. Contact us for pricing and features.",
      price: "Custom",
      features: ["Everything in Team", "Unlimited team members", "Dedicated account manager", "API access"]
    },
    {
      title: "Starter Plan",
      description: "Great for individuals getting started. Try all basic features at no cost.",
      price: "Free",
      features: ["3 projects", "Community support", "Basic analytics", "Email support"]
    }
  ];

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
      <div className="max-w-xl mx-auto">
        <Carousel
          autoplay
          showDots
          showControls
          options={{ loop: true ,axis:'y'}}
          
       
        >
          {cardData.map((card, index) => (
            <CarouselItem key={index}>
              <Card className="h-full border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="border-b border-gray-100 p-6">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="text-primary-600 text-xl mt-2">{card.price}</p>
                </CardHeader>
                <CardBody className="p-6">
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter className="p-6 border-t border-gray-100">
                  <Button 
                    variant={index % 2 === 0 ? "gradient" : "outline"} 
                    className="w-full"
                  >
                    {card.price === "Free" ? "Get Started" : "Subscribe Now"}
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <div className="mt-12 text-center">
        <Button variant="link">Compare all plans →</Button>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="p-10 space-y-12 -z-10">
      <h1 className="text-6xl font-extrabold text-center">Astra UI Showcase</h1>
      
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Buttons</h2>
        <div className="space-x-4 grid grid-cols-2 gap-4">
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="secondary" loading={true}>Secondary</Button>
          <Button variant="gradient">Gradient</Button> 
          <Button iconLeft="📩">Send Email</Button>
          <Button variant="gradient" iconRight="➡️">Continue</Button>
          <Button variant="destructive" iconLeft="🗑️" iconRight="🔥">Delete</Button>
          <Button variant="neon" iconLeft="🌟" pulse>Special Offer</Button>
        </div>

        <div className="space-x-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <span>⚡</span>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Card Component</h2>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <h3>This is a standout card ✨</h3>
          </CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam laudantium sunt exercitationem aliquid labore assumenda saepe nesciunt voluptate ut, consectetur autem ratione vitae officia ab natus voluptatibus corporis repudiandae!
            </p>
          </CardBody>
          <CardFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="default">Launch</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Card Carousel</h2>
        <CardCarousel />
      </div>
       <Input
        label="Email"
        placeholder="you@example.com"
        type="email"
        variant="outline"
        icon={<Mail size={18} />}
      />
      <Input
        label="Username"
        placeholder="your username"
        type="text"
        variant="ghost"
        helperText='min 7 character'
      />
      

      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
        icon={<Lock size={18} />}
        error="Password is required"/>

          <Input
        label="Password"
        placeholder="Enter password"
        type="password"
        icon={<Lock size={18} />}
        inputSize='sm'/>



        <Input
  label="Email"
  placeholder="Enter email"
  variant="default"
  inputSize="md"
  helperText="We won't share your email"
  icon={<Mail size={16} />}
/>
<Input
  label="Email"
  type="email"
  floating
  required
  helperText="We'll never share your email."
/>

<Input
  label="Password"
  type="password"
  floating
  clearable
/>

<Input
  label="Amount"
  leftAddon="$"
  rightAddon="USD"
  floating
/>

<Input
  label="Success Field"
  floating
  success
  successText="Looks good!"
/>

<Input
  label="Error Field"
  floating
  error="This field is required."
/>


<Input
  label="Username"
  value="available_username"
  success
  successText="Username available"
/>

<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>

<Input inputSize="sm" label="Small Input" />
<Input inputSize="md" label="Medium Input" />
<Input inputSize="lg" label="Large Input" />

<Input
  label="Price"
  leftAddon="$"
  rightAddon="USD"
  type="number"
/>
<div className="space-y-12">
  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Basic Badge Variants</h2>
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="premium">Premium</Badge>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Badge Sizes</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium (Default)</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="icon">
        <Star size={16} />
      </Badge>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Badge Shapes</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="square">Square</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Badges with Icons</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge leftIcon={<Check size={16} />}>Success</Badge>
      <Badge rightIcon={<AlertCircle size={16} />}>Warning</Badge>
      <Badge leftIcon={<Info size={16} />} rightIcon={<Bell size={16} />}>
        Notification
      </Badge>
      <Badge size="icon" variant="outline">
        <Settings size={16} />
      </Badge>
    </div>
  </div>
 
  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Closable Badges</h2>
    <div className="flex flex-wrap items-center gap-3">
      {/* <Badge closable onClose={() => alert('Closed!')}>
        Dismiss me
      </Badge> */}
      <Badge variant="destructive" closable>
        Important
      </Badge>
      <Badge variant="success" closable leftIcon={<Check size={16} />}>
        Completed
      </Badge>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Badge States</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge isLoading>Loading</Badge>
      <Badge disabled>Disabled</Badge>
      <Badge pulse>New</Badge>
    </div>
  </div>

 
  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Interactive Badges</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="secondary" interactive>
        Hover me
      </Badge>
      <Badge variant="info" interactive leftIcon={<Info size={16} />}>
        More info
      </Badge>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-4xl font-bold">Advanced Combinations</h2>
    <div className="flex flex-wrap items-center gap-3">
      <Badge
        variant="success"
        size="lg"
        leftIcon={<Check size={18} />}
        pulse
      >
        Premium Feature
      </Badge>
      <Badge
        variant="destructive"
        shape="pill"
        rightIcon={<AlertCircle size={16} />}
      >
        Critical Alert
      </Badge>
      <Badge variant="info" size="sm" interactive>
        New Update
      </Badge>
      <Badge
        variant="warning"
        size="md"
        leftIcon={<Loader2 size={16} className="animate-spin" />}
      >
        Processing
      </Badge>
      <Badge variant="premium" size="lg" leftIcon={<PyramidIcon size={18} />}>
        Exclusive
      </Badge>
    </div>
  </div>
</div>
<ModalExamplePage/>
     <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Avatar Variations</h1>

      <div className="flex items-center gap-4">
        <Avatar fallbackText="John Doe"  size="md"/>
        <span>Default (md, rounded)</span>
      </div>

      <div className="flex items-center gap-4">
        <Avatar size="sm" fallbackText="AB DEviller" status="online" />
        <Avatar size="md" fallbackText="AB Suhel" />
        <Avatar size="lg" fallbackText="AB Virat Kholi" />
      </div>

      <div className="flex items-center gap-4">
        <Avatar shape="circle" fallbackText="CD" />
        <Avatar shape="square" fallbackText="CD" />
        <Avatar shape="rounded" fallbackText="CD" />
      </div>

      <div className="flex items-center gap-4">
        <Avatar
          src={`/profile_1.jpg`}
          alt="Jane Doe"
          size="lg"
          shape="circle"
          status="busy"
        />
        <Avatar
          src={`/profile_1.jpg`}
          fallbackText="Eleven hevean"
          size="xl"
          shape="circle"
          status="away"
        />
        
      </div>
         
    </div>
   <NavbarExamples/>
  <DropDownExamples/>
 
<KeybabMenuExamples/>
<StepProgessExamples/>

    </div>
  );
};

export default Page;