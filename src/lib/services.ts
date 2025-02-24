export const services = [
  {
    id: 1,
    name: "PLC Programming",
    description: "Custom programming solutions for all leading PLC brands, tailored to your industrial needs. Our expert team ensures optimal performance and reliability.",
    image: "https://img.freepik.com/free-photo/engineer-working-with-plc-programming_1359-516.jpg",
    shortDescription: "Expert PLC programming solutions",
    features: [
      "Custom PLC programming",
      "System optimization",
      "Performance monitoring",
      "24/7 support"
    ]
  },
  {
    id: 2,
    name: "HMI & SCADA Design",
    description: "Intuitive interfaces and robust control systems for seamless automation. We create user-friendly solutions that enhance operational efficiency.",
    image: "https://img.freepik.com/free-photo/scada-system-control-room_1359-517.jpg",
    shortDescription: "Intuitive control interfaces",
    features: [
      "Custom interface design",
      "Real-time monitoring",
      "Data visualization",
      "Remote access"
    ]
  },
  {
    id: 3,
    name: "Machine Preparation",
    description: "Comprehensive machine setup services to ensure optimal performance and reliability. We handle everything from installation to maintenance.",
    image: "https://img.freepik.com/free-photo/technician-maintaining-industrial-machine_1359-518.jpg",
    shortDescription: "Complete machine setup",
    features: [
      "Installation services",
      "Configuration",
      "Testing & validation",
      "Maintenance plans"
    ]
  },
  {
    id: 4,
    name: "Industrial Network Design",
    description: "Expert design and implementation of industrial networks, ensuring reliable communication between all your automation systems.",
    image: "https://img.freepik.com/free-photo/industrial-ethernet-network_1359-519.jpg",
    shortDescription: "Reliable network solutions",
    features: [
      "Network architecture",
      "Security implementation",
      "Performance optimization",
      "Redundancy planning"
    ]
  },
  {
    id: 5,
    name: "Process Automation",
    description: "End-to-end process automation solutions that streamline your operations and improve efficiency across your entire facility.",
    image: "https://img.freepik.com/free-photo/automated-manufacturing-process_1359-520.jpg",
    shortDescription: "Streamlined operations",
    features: [
      "Process analysis",
      "System integration",
      "Workflow optimization",
      "Quality control"
    ]
  },
  {
    id: 6,
    name: "Maintenance & Support",
    description: "Comprehensive maintenance and support services to keep your automation systems running at peak performance.",
    image: "https://img.freepik.com/free-photo/maintenance-technician-work_1359-521.jpg",
    shortDescription: "Reliable system support",
    features: [
      "Preventive maintenance",
      "Emergency support",
      "System updates",
      "Performance monitoring"
    ]
  }
]

export type Service = (typeof services)[0]

