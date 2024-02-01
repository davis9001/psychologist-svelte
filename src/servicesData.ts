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
]
