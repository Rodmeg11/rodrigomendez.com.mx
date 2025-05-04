// This file contains the product data for the website

export const products = [
  {
    id: "1",
    title: "And I Was Never The Same",
    category: "Original Painting",
    price: "19,000.00",
    description:
      "An expressive work that combines abstract and figurative elements, creating a powerful visual narrative about personal transformation. Created with mixed techniques on canvas.",
    details: "Mixed technique on canvas\nDimensions: 100 x 120 cm\nYear: 2023\nSigned by the artist",
    images: [
      "/placeholder.svg?height=1200&width=800",
      "/placeholder.svg?height=1200&width=800",
      "/placeholder.svg?height=1200&width=800",
    ],
    related: ["2", "3", "5"],
  },
  {
    id: "2",
    title: "Dimmed By Change And Distance",
    category: "Original Drawing",
    price: "4,000.00",
    description:
      "An expressive drawing that explores themes of transformation and emotional distance. The work uses charcoal and mixed techniques to create an atmosphere of introspection and melancholy.",
    details: "Charcoal and mixed technique on paper\nDimensions: 50 x 70 cm\nYear: 2022\nSigned by the artist",
    images: ["/placeholder.svg?height=1200&width=800", "/placeholder.svg?height=1200&width=800"],
    related: ["1", "3", "6"],
  },
  {
    id: "3",
    title: "Savior Of The World",
    category: "Original Drawing",
    price: "2,000.00",
    description:
      "A contemporary interpretation of spiritual themes, created with expressive drawing techniques that combine precision and emotion.",
    details: "Charcoal and pastel on paper\nDimensions: 40 x 60 cm\nYear: 2023\nSigned by the artist",
    images: ["/placeholder.svg?height=1200&width=800", "/placeholder.svg?height=1200&width=800"],
    related: ["1", "2", "6"],
  },
  {
    id: "4",
    title: "Watercolor Landscape",
    category: "Original Watercolor",
    price: "1,500.00",
    description:
      "A delicate watercolor landscape that captures the essence of nature with subtle color transitions and atmospheric perspective.",
    details: "Watercolor on paper\nDimensions: 25 x 35 cm\nYear: 2022\nSigned by the artist",
    images: ["/placeholder.svg?height=1200&width=800", "/placeholder.svg?height=1200&width=800"],
    related: ["7", "8", "9"],
  },
  {
    id: "5",
    title: "Abstract Composition",
    category: "Mixed Technique",
    price: "3,200.00",
    description:
      "An experimental abstract composition that explores the relationship between form, color, and texture using various materials and techniques.",
    details: "Mixed media on canvas\nDimensions: 60 x 80 cm\nYear: 2023\nSigned by the artist",
    images: ["/placeholder.svg?height=1200&width=800", "/placeholder.svg?height=1200&width=800"],
    related: ["1", "4", "7"],
  },
  {
    id: "6",
    title: "Portrait Study",
    category: "Original Drawing",
    price: "1,800.00",
    description:
      "A detailed portrait study that explores human expression through careful observation and expressive mark-making.",
    details: "Charcoal and graphite on paper\nDimensions: 40 x 50 cm\nYear: 2022\nSigned by the artist",
    images: ["/placeholder.svg?height=1200&width=800", "/placeholder.svg?height=1200&width=800"],
    related: ["2", "3", "1"],
  },
  {
    id: "7",
    title: "Serene Lake at Sunset",
    category: "Original Watercolor",
    price: "2,200.00",
    description:
      "A tranquil watercolor landscape capturing the serene beauty of a lake at sunset. The painting features a solitary tree silhouette against a backdrop of distant mountains, with a vibrant turquoise lake in the foreground. The sky transitions from soft blue to warm peach tones, creating a peaceful atmosphere.",
    details: "Watercolor on paper\nDimensions: 30 x 40 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-landscape-lake.png", "/images/watercolor-landscape-lake.png"],
    related: ["8", "9", "14"],
  },
  {
    id: "8",
    title: "Mountain Valley Vista",
    category: "Original Watercolor",
    price: "2,400.00",
    description:
      "A dramatic watercolor landscape depicting a mountainous valley at dawn or dusk. The painting showcases rugged cliffs and rock formations with a distant valley view. The sky features soft blue and peach tones that complement the earthy colors of the mountains, creating a sense of depth and atmosphere.",
    details: "Watercolor on paper\nDimensions: 30 x 40 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-mountain-valley.png", "/images/watercolor-mountain-valley.png"],
    related: ["7", "9", "15"],
  },
  {
    id: "9",
    title: "Golden Fields Panorama",
    category: "Original Watercolor",
    price: "2,600.00",
    description:
      "A breathtaking panoramic watercolor landscape depicting golden fields and farmland stretching toward distant blue mountains. The painting captures the warm amber tones of the countryside contrasted with a dramatic blue sky that transitions from deep azure at the top to lighter hues near the horizon. The artist masterfully conveys depth and atmosphere through subtle color gradations and loose, expressive brushwork.",
    details: "Watercolor on paper\nDimensions: 35 x 45 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-golden-fields.png", "/images/watercolor-golden-fields.png"],
    related: ["7", "8", "14"],
  },
  {
    id: "10",
    title: "Sketchbook: Lakeside View",
    category: "Mixed Technique",
    price: "1,950.00",
    description:
      "A serene mixed technique sketch capturing the peaceful atmosphere of a lake viewed through a frame of trees. The composition features tall tree trunks in the foreground that frame a vista of calm blue water, with rolling green hills and mountains in the background. The artist skillfully uses a harmonious palette of blues, greens, and earth tones to evoke the tranquility of nature.",
    details: "Mixed technique on paper\nDimensions: 28 x 38 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-lake-trees.png", "/images/watercolor-lake-trees.png"],
    related: ["11", "12", "13"],
  },
  {
    id: "11",
    title: "Sketchbook: Village Scene",
    category: "Mixed Technique",
    price: "1,800.00",
    description:
      "A moody monochromatic sketch depicting a European village with a prominent church spire. The artist masterfully captures the atmospheric quality of the scene using various shades of gray, with buildings reflected in water below. The minimalist approach creates a dreamy, nostalgic feeling that invites contemplation.",
    details: "Mixed technique on paper\nDimensions: 24 x 32 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-town-spire.png", "/images/watercolor-town-spire.png"],
    related: ["12", "13", "10"],
  },
  {
    id: "12",
    title: "Sketchbook: Town Center",
    category: "Mixed Technique",
    price: "1,850.00",
    description:
      "A striking monochromatic study of a historic town center with a prominent civic building. Using only shades of gray, the artist captures the architectural details and spatial relationships of the buildings with remarkable economy of means. The loose, confident brushwork creates a sense of life and movement within the urban landscape.",
    details: "Mixed technique on paper\nDimensions: 24 x 32 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-buildings.png", "/images/watercolor-buildings.png"],
    related: ["11", "13", "10"],
  },
  {
    id: "13",
    title: "Sketchbook: Street Perspective",
    category: "Mixed Technique",
    price: "1,900.00",
    description:
      "A compelling monochromatic sketch depicting a narrow urban street with a dramatic view of a tower in the distance. The composition uses strong perspective lines created by the buildings on either side to draw the eye toward the central architectural feature. The artist's masterful handling of values creates a sense of depth and atmosphere, while subtle suggestions of figures at street level add a human element to the scene.",
    details: "Mixed technique on paper\nDimensions: 24 x 32 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-street-tower.png", "/images/watercolor-street-tower.png"],
    related: ["11", "12", "10"],
  },
  {
    id: "14",
    title: "Tranquil Lakeside",
    category: "Original Watercolor",
    price: "2,300.00",
    description:
      "A peaceful watercolor landscape depicting a serene lake framed by trees. The composition masterfully captures the reflective quality of the water and the lush vegetation surrounding it. The artist uses a harmonious palette of blues and greens with touches of earth tones to create a sense of depth and tranquility. The delicate brushwork in the foliage and the subtle gradations in the water surface demonstrate exceptional technical skill.",
    details: "Watercolor on paper\nDimensions: 28 x 38 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-lake-view.png", "/images/watercolor-lake-view.png"],
    related: ["7", "9", "15"],
  },
  {
    id: "15",
    title: "Mountain Majesty",
    category: "Original Watercolor",
    price: "2,500.00",
    description:
      "A dramatic watercolor landscape showcasing the imposing beauty of a mountain range. The composition features bold cliffs and rocky outcroppings in the foreground, with softer, misty mountains receding into the distance. The artist skillfully employs a palette of blues, purples, and greens to convey the grandeur and scale of the scene. The dynamic brushwork in the foreground cliffs contrasts beautifully with the delicate treatment of the distant mountains and sky.",
    details: "Watercolor on paper\nDimensions: 30 x 42 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-mountain-cliff.png", "/images/watercolor-mountain-cliff.png"],
    related: ["8", "14", "7"],
  },
]
