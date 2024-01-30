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
    from_color: "slate-500",
    to_color: "slate-900",
    button_color: "slate-600",
  },
  {
    title: "Couples Counseling",
    featured: true,
    image_url: "https://loremflickr.com/320/240/couples",
    url: "/services/couples-counseling",
    description:
      "Supporting couples in building healthier relationships and effective communication.",
    from_color: "indigo-500",
    to_color: "indigo-900",
    button_color: "indigo-600",
  },
  {
    title: "Workshops",
    featured: true,
    image_url: "https://loremflickr.com/320/240/workshop",
    url: "/services/mindfulness-workshops",
    description:
      "Learn mindfulness techniques to manage stress, anxiety, and improve well-being.",
    from_color: "amber-500",
    to_color: "amber-900",
    button_color: "amber-600",
  },
]
