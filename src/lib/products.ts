export const products = [
  {
    id: 1,
    name: "Advanced PLC Controller X200",
    category: "PLCs",
    description: "High-performance programmable logic controller featuring advanced processing capabilities, multiple I/O ports, and seamless integration with modern industrial systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    shortDescription: "Next-gen PLC for complex automation tasks"
  },
  {
    id: 2,
    name: "Industrial HMI Touch Panel",
    category: "HMI",
    description: "10-inch high-resolution touch screen interface with intuitive controls, robust industrial design, and comprehensive connectivity options for seamless system integration.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
    shortDescription: "Interactive touch control interface"
  },
  {
    id: 3,
    name: "Smart Factory Gateway",
    category: "Network",
    description: "Industrial IoT gateway enabling secure connectivity between factory floor devices and enterprise systems, supporting multiple protocols and real-time data processing.",
    image: "https://images.unsplash.com/photo-1581092787557-44d3d9889a69?w=800&q=80",
    shortDescription: "IoT-enabled industrial gateway"
  },
  {
    id: 4,
    name: "Variable Frequency Drive Pro",
    category: "Drives",
    description: "Advanced VFD system with precise motor control, energy efficiency features, and comprehensive protection mechanisms for industrial applications.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    shortDescription: "Premium variable frequency drive"
  },
  {
    id: 5,
    name: "Industrial Ethernet Switch",
    category: "Network",
    description: "Managed industrial Ethernet switch with redundant power inputs, robust metal housing, and advanced security features for reliable network connectivity.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
    shortDescription: "Reliable industrial networking"
  },
  {
    id: 6,
    name: "Process Control System",
    category: "Control Systems",
    description: "Integrated process control system with advanced PID control, data logging, and remote monitoring capabilities for complex industrial processes.",
    image: "https://images.unsplash.com/photo-1581092787557-44d3d9889a69?w=800&q=80",
    shortDescription: "Complete process control solution"
  },
  {
    id: 7,
    name: "Safety PLC System",
    category: "PLCs",
    description: "Safety-rated programmable logic controller with redundant architecture, certified safety functions, and comprehensive diagnostics capabilities.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    shortDescription: "Safety-certified control system"
  },
  {
    id: 8,
    name: "Industrial Sensors Package",
    category: "Sensors",
    description: "Complete set of industrial sensors including proximity, temperature, pressure, and level sensors with high accuracy and reliability.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
    shortDescription: "Comprehensive sensor solution"
  },
  {
    id: 9,
    name: "Motion Control System",
    category: "Motion",
    description: "Advanced motion control system supporting multiple axes, precise positioning, and seamless integration with PLCs and industrial networks.",
    image: "https://images.unsplash.com/photo-1581092787557-44d3d9889a69?w=800&q=80",
    shortDescription: "Precision motion control"
  },
  {
    id: 10,
    name: "Industrial PC Controller",
    category: "Control Systems",
    description: "Rugged industrial PC with powerful processing capabilities, multiple display outputs, and extensive connectivity options for demanding applications.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    shortDescription: "Robust industrial computing"
  },
  {
    id: 11,
    name: "Remote I/O System",
    category: "I/O Systems",
    description: "Distributed I/O system with modular design, hot-swap capability, and support for multiple industrial protocols for flexible automation solutions.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
    shortDescription: "Flexible I/O distribution"
  },
  {
    id: 12,
    name: "Industrial Power Supply",
    category: "Power",
    description: "High-reliability power supply unit with wide input range, overcurrent protection, and redundancy options for critical industrial applications.",
    image: "https://images.unsplash.com/photo-1581092787557-44d3d9889a69?w=800&q=80",
    shortDescription: "Reliable power solution"
  },
  {
    id: 13,
    name: "Data Acquisition System",
    category: "Data Systems",
    description: "Comprehensive data acquisition system with high-speed sampling, multiple input types, and advanced analysis capabilities for process monitoring.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    shortDescription: "Advanced data collection"
  },
  {
    id: 14,
    name: "Industrial Communication Gateway",
    category: "Network",
    description: "Multi-protocol communication gateway supporting various industrial networks and providing seamless protocol conversion for system integration.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
    shortDescription: "Versatile protocol converter"
  },
  {
    id: 15,
    name: "Machine Vision System",
    category: "Vision",
    description: "Complete machine vision solution including high-resolution cameras, powerful image processing, and intuitive configuration software for quality inspection.",
    image: "https://images.unsplash.com/photo-1581092787557-44d3d9889a69?w=800&q=80",
    shortDescription: "Advanced vision inspection"
  }
]

export type Product = (typeof products)[0]

