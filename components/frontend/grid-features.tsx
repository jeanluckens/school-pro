import { Card, CardContent } from "@/components/ui/card"
import {
  Scissors,
  Plus,
  Type,
  Palette,
  Music,
  BarChart3,
  Grid3X3,
  RefreshCw,
  ArrowRight,
  User,
  Settings,
  Camera,
  Users,
  GraduationCap,
  MessageSquare,
  DollarSign,
  ClipboardList,
  Bus,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import SectionHeader from "./section-header"


const features = [
  {
      title: "Student Information System",
      description: "Centralized student data management with digital enrollment, profile tracking, and academic records in one secure location.",
      icon: Users,
      image: "/images/placeholder.avif"
    },
    {
      title: "Academic Excellence Suite",
      description: "Comprehensive tools for curriculum planning, examination management, and automated grading with detailed performance analytics.",
      icon: GraduationCap,
      image: "/images/placeholder.avif"
    },
    {
      title: "Smart Communication Hub",
      description: "Multi-channel messaging platform connecting teachers, parents, and students with real-time notifications and update.",
      icon: MessageSquare,
      image: "/images/placeholder.avif"
    },
    {
      title: "Financial Management Center",
      description: "Streamlined fee collection, automated billing, and comprehensive financial reporting with secure payment processing.",
      icon: DollarSign,
      image: "/images/placeholder.avif"
    },
    {
      title: "Staff & HR Management",
      description: "Complete staff administration with attendance tracking, performance, and automated payroll processing.",
      icon: ClipboardList,
      image: "/images/placeholder.avif"
    },
    {
      title: "Transport & Safety Control",
      description: "Real-time fleet tracking, route optimization, and automated parent notifications for secure student transportation.",
      icon: Bus,
      image: "/images/placeholder.avif"
    },
    {
      title: "Ressource & Facility Manager",
      description: "Digital library system, inventory tracking, and smart scheduling tools for optimal ressource utilization.",
      icon: BookOpen,
      image: "/images/placeholder.avif"
    }
  ];


export default function GridFeatures() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <SectionHeader
          title="Features" 
          heading="All-in-One School Management Platform" 
          description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
        />

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Video Editing Card */}
          <Card className="bg-white shadow-lg border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[0].title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {features[0].description}
                </p>
              </div>

              {/* Video Editor Interface Mockup */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">AI Video Editing</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  <div className="flex">
                    {/* Sidebar Tools */}
                    <div className="w-24 bg-gray-50 border-r p-3 space-y-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Scissors className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="text-xs text-gray-600 text-center leading-tight font-medium">Auto-Cut</span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Plus className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <User className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Camera className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Type className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Settings className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Music className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <BarChart3 className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4">
                      <div className="space-y-3 mb-4">
                        {/* Smart Scene Detection */}
                        <div className="flex items-center gap-3 text-sm bg-white rounded-lg p-3 border shadow-sm">
                          <Grid3X3 className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700 font-medium">Smart Scene Detection</span>
                        </div>

                        {/* Auto-Color Correction */}
                        <div className="flex items-center gap-3 text-sm bg-white rounded-lg p-3 border shadow-sm">
                          <Palette className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700 font-medium">Auto-Color Correction</span>
                        </div>

                        {/* Auto-Music Syncing */}
                        <div className="flex items-center gap-3 text-sm bg-white rounded-lg p-3 border shadow-sm">
                          <Music className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700 font-medium">Auto-Music Syncing</span>
                        </div>
                      </div>

                      {/* Video Preview */}
                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <Image
                          src={features[0].image}
                          alt={features[0].title}
                          width={320}
                          height={180}
                          className="w-full h-36 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Video Generation Card */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[1].title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {features[1].description}
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm">
                        <Image
                          src={features[1].image}
                          alt={features[1].title}
                          width={320}
                          height={180}
                          className="w-full h-36 object-cover"
                        />
                      </div>

              {/* Generation Interface */}
              <div className="space-y-6">
                <div>
                  
                  <div className="flex justify-end mt-2">
                    <span className="text-sm text-gray-400">0/2000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Examples</h4>
                    <RefreshCw className="w-4 h-4 text-orange-500 cursor-pointer hover:rotate-180 transition-transform duration-300" />
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
                      <span className="text-sm text-gray-700">Create a fun vacation recap video</span>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
                      <span className="text-sm text-gray-700">Generate a birthday celebration montage</span>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
                      <span className="text-sm text-gray-700">Make a stylish daily vlog</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
