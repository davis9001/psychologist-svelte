// src/servicesData.js

type Service = {
  title: string
  featured: boolean
  image_url: string
  url?: string
  description: string
  button_text?: string
  from_color?: string
  to_color?: string
  button_color?: string
}

export const servicesData: Service[] = [
  {
    title: "Individual Therapy",
    featured: true,
    image_url: "https://loremflickr.com/320/240/person",
    url: "/services/individual-therapy",
    description:
      "Tailored one-on-one therapy sessions to address personal challenges and growth.",
    button_text: "Learn More",
    from_color: "accent1-500",
    to_color: "accent1-900",
    button_color: "accent1-600",
  },
  {
    title: "Couples Counseling",
    featured: true,
    image_url: "https://loremflickr.com/320/240/couples",
    url: "/services/couples-counseling",
    description:
      "Supporting couples in building healthier relationships and effective communication.",
    from_color: "accent2-500",
    to_color: "accent2-900",
    button_color: "accent2-600",
  },
  {
    title: "Workshops",
    featured: true,
    image_url: "https://loremflickr.com/320/240/workshop",
    url: "/services/mindfulness-workshops",
    description:
      "Learn mindfulness techniques to manage stress, anxiety, and improve well-being.",
    from_color: "accent3-500",
    to_color: "accent3-900",
    button_color: "accent3-600",
  },
  {
    title: "Relationship Coaching",
    featured: false,
    image_url: "https://loremflickr.com/320/240/relationship",
    url: "/services/relationship-coaching",
    description:
      "Enhance your relationships and communication through expert coaching.",
    from_color: "teal-500",
    to_color: "teal-900",
    button_color: "teal-600",
  },
  {
    title: "Mindfulness Workshops",
    featured: false,
    image_url: "https://loremflickr.com/320/240/mindfulness",
    url: "/services/mindfulness-workshops",
    description:
      "Learn mindfulness techniques to manage stress, anxiety, and improve well-being.",
    from_color: "blue-500",
    to_color: "blue-900",
    button_color: "blue-600",
  },
  {
    title: "Career Counseling",
    featured: false,
    image_url: "https://loremflickr.com/320/240/career",
    url: "/services/career-counseling",
    description:
      "Navigate your career path with expert guidance and counseling.",
    from_color: "indigo-500",
    to_color: "indigo-900",
    button_color: "indigo-600",
  },
  {
    title: "Group Therapy",
    featured: false,
    image_url: "https://loremflickr.com/320/240/group-therapy",
    url: "/services/group-therapy",
    description:
      "Join supportive group sessions to connect with others and share experiences.",
    from_color: "pink-500",
    to_color: "pink-900",
    button_color: "pink-600",
  },
  {
    title: "Stress Management",
    featured: false,
    image_url: "https://loremflickr.com/320/240/stress-management",
    url: "/services/stress-management",
    description:
      "Develop effective strategies to cope with and reduce stress in your life.",
    from_color: "red-500",
    to_color: "red-900",
    button_color: "red-600",
  },
  {
    title: "Parenting Support",
    featured: false,
    image_url: "https://loremflickr.com/320/240/parenting-support",
    url: "/services/parenting-support",
    description:
      "Guidance and support for parents to navigate the challenges of raising children.",
    from_color: "yellow-500",
    to_color: "yellow-900",
    button_color: "yellow-600",
  },
]
