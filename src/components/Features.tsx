import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Fast shipping and reliable order fulfillment for your handcrafted leather goods.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Protect your customers' information with industry-leading security measures.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless shopping experience on any device for your handmade leather bag store.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your customer base with worldwide delivery and a fast global content network.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description: "Gain valuable data to track and optimize the performance of your leather goods business.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Branded Experience",
      description: "Customize your online store to reflect the unique identity of your handcrafted leather brand.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer Tools",
      description: "Leverage powerful APIs and developer resources to enhance your leather goods ecommerce platform.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Receive expert assistance whenever you need help with your handmade leather bag store.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Protect your customers' personal information and maintain their trust in your leather goods brand.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your Leather Goods Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with Our Powerful Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the features that will help you build, grow, and scale your handcrafted
            leather bag ecommerce business with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to take your handcrafted leather bag business to the next level?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}