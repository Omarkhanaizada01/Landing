import {
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  services01,
  services02,
  services03,
  featuers01,
  featuers02,
  featuers03,
  featuers04,
  user01,
  user02,
  user03,
  instagram,
  twitter,
  youtube,
  ball,
} from "../assets";

import ComplexButton from "../components/ComplexButton";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "service",
    title: "Service",
  },
  {
    id: "featuers",
    title: "Feature",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
  {
    id: "FAQ",
    title: "FAQ",
  },
];

export const clients = [
  {
    id: 1,
    icon: client01,
  },
  {
    id: 2,
    icon: client02,
  },
  {
    id: 3,
    icon: client03,
  },
  {
    id: 4,
    icon: client04,
  },
  {
    id: 5,
    icon: client05,
  },
  {
    id: 6,
    icon: client06,
  },
  {
    id: 7,
    icon: client07,
  },
];

export const services = [
  {
    id: 1,
    title: "Membership<br />Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: services01,
  },
  {
    id: 2,
    title: "National<br />Associations",
    content:
      "Our membership management software provides full automation of membership renewals and paymentsb",
    icon: services02,
  },
  {
    id: 3,
    title: "Clubs And<br />Groups",

    content:
      "Our membership management software provides full automation of membership renewals and paymentsh",
    icon: services03,
  },
];

export const featuers = [
  {
    id: 1,
    title: "2,245,341",
    content: "Members",
    icon: featuers01,
  },
  {
    id: 2,
    title: "46,328",
    content: "Clubs",
    icon: featuers02,
  },
  {
    id: 3,
    title: "828,867",
    content: "Event Bookings",
    icon: featuers03,
  },
  {
    id: 4,
    title: "1,926,436",
    content: "Payments",
    icon: featuers04,
  },
];

export const communityUpdatesData = [
  {
    id: 1,
    image: user01,
    text: "Creating Streamlined Safeguarding Processes with OneRen",
    button: <ComplexButton title="Readmore" />,
  },
  {
    id: 2,
    image: user02,
    text: "What are your safeguarding responsibilities and how can you manage them?",
    button: <ComplexButton title="Readmore" />,
  },
  {
    id: 3,
    image: user03,
    text: "Revamping the Membership Model with Triathlon Australia",
    button: <ComplexButton title="Readmore" />,
  },
];

export const footerLinks = [
  {
    id: "header-1",
    title: "Company",
    links: [
      {
        id: 1,
        title: "About us",
      },
      {
        id: 2,
        title: "Blog",
      },
      {
        id: 3,
        title: "Contact us",
      },
      {
        id: 4,
        title: "Pricing",
      },
      {
        id: 5,
        title: "Testimonials",
      },
    ],
  },
  {
    id: "header-2",
    title: "Support",
    links: [
      {
        id: 1,
        title: "Help center",
      },
      {
        id: 2,
        title: "Terms of service",
      },
      {
        id: 3,
        title: "Legal",
      },
      {
        id: 4,
        title: "Privacy policy",
      },
      {
        id: 5,
        title: "Status",
      },
    ],
  },
];

export const socialMeda = [
  {
    id: 1,
    icon: instagram,
  },
  {
    id: 2,
    icon: ball,
  },
  {
    id: 3,
    icon: twitter,
  },
  {
    id: 4,
    icon: youtube,
  },
];
