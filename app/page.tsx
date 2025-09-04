"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Trophy, Users, Zap, Heart } from "lucide-react"

export default function BlindDateHackathon() {
  const scrollToEventDetails = () => {
    const eventDetailsSection = document.getElementById("event-details")
    if (eventDetailsSection) {
      eventDetailsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openGoogleMaps = () => {
    const address = "Oracle Lab, VAST"
    const mapsUrl = `https://maps.app.goo.gl/Wjf3JAqFMPEmyGZE6`
    window.open(mapsUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center border-4 border-white shadow-lg">
              <Heart className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>

          <h1 className="font-pixel text-neon-pink text-4xl md:text-6xl lg:text-7xl mb-4 animate-pulse-glow text-balance">
            BLIND DATE
          </h1>
          <h2 className="font-pixel text-neon-cyan text-2xl md:text-4xl lg:text-5xl mb-6 animate-pulse-glow text-balance">
            HACKATHON
          </h2>

          <p className="font-pixel text-neon-yellow text-sm md:text-lg mb-8 animate-pulse-glow text-balance">
            Mystery Match? One Day Hackathon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <div className="flex items-center gap-2 font-pixel text-white text-xs md:text-sm">
              <Calendar className="w-4 h-4 text-neon-pink" />
              15/09/2025
            </div>
            <div className="flex items-center gap-2 font-pixel text-white text-xs md:text-sm">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              Oracle Lab, VAST
            </div>
            <div className="flex items-center gap-2 font-pixel text-white text-xs md:text-sm">
              <Trophy className="w-4 h-4 text-neon-yellow" />
              ₹6,000 Prize Pool
            </div>
          </div>

          <Button
            className="arcade-button font-pixel text-white text-lg px-8 py-6 rounded-lg"
            onClick={scrollToEventDetails}
          >
            PRESS START
          </Button>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-pixel text-neon-pink text-3xl md:text-4xl text-center mb-12 animate-pulse-glow text-balance">
              ABOUT THE GAME
            </h2>

            <Card className="game-card p-8 mb-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-pixel text-neon-cyan text-xl mb-4">What's a Blind Date Hackathon?</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Get ready for the ultimate coding adventure! Teams are formed randomly - you won't know your
                      teammates until the event starts. It's like a blind date, but for hackers!
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Build amazing projects, make new friends, and compete for exciting prizes in this one-day coding
                      marathon.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center border-4 border-cyan-400 shadow-lg">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Event Details */}
        <section id="event-details" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-pixel text-neon-cyan text-3xl md:text-4xl text-center mb-12 animate-pulse-glow text-balance">
              EVENT DETAILS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="game-card p-6 text-center">
                <CardContent className="p-0">
                  <Calendar className="w-12 h-12 text-neon-pink mx-auto mb-4" />
                  <h3 className="font-pixel text-white text-sm mb-2">DATE</h3>
                  <p className="text-gray-300 font-pixel text-xs">15th September 2025</p>
                </CardContent>
              </Card>

              <Card
                className="game-card p-6 text-center cursor-pointer hover:scale-105 transition-transform"
                onClick={openGoogleMaps}
              >
                <CardContent className="p-0">
                  <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-pixel text-white text-sm mb-2">LOCATION</h3>
                  <p className="text-gray-300 font-pixel text-xs text-balance">Oracle Lab, VAST</p>
                </CardContent>
              </Card>

              <Card className="game-card p-6 text-center">
                <CardContent className="p-0">
                  <Trophy className="w-12 h-12 text-neon-yellow mx-auto mb-4" />
                  <h3 className="font-pixel text-white text-sm mb-2">PRIZE POOL</h3>
                  <p className="text-gray-300 font-pixel text-xs">₹6,000 Total</p>
                </CardContent>
              </Card>

              <Card className="game-card p-6 text-center">
                <CardContent className="p-0">
                  <Zap className="w-12 h-12 text-neon-pink mx-auto mb-4" />
                  <h3 className="font-pixel text-white text-sm mb-2">DURATION</h3>
                  <p className="text-gray-300 font-pixel text-xs">One Epic Day</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Register Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-pixel text-neon-yellow text-3xl md:text-4xl mb-8 animate-pulse-glow text-balance">
              READY TO PLAY?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed text-balance">
              Join the most exciting hackathon of the year! Meet new people, build amazing projects, and compete for
              awesome prizes.
            </p>
            <Button
              className="arcade-button font-pixel text-white text-xl px-12 py-8 rounded-lg mb-12"
              onClick={() => window.open("https://luma.com/u2zse4yd", "_blank")}
            >
              REGISTER NOW
            </Button>

            <div className="mt-16">
              <h3 className="font-pixel text-neon-cyan text-xl md:text-2xl mb-8 animate-pulse-glow text-balance">
                CONTACT COORDINATORS
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="game-card p-6">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center border-2 border-white">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-pixel text-white text-sm mb-2">COORDINATOR 1</h4>
                    <p className="text-gray-300 font-pixel text-xs mb-4">CD Adithyan</p>
                    <Button
                      className="arcade-button font-pixel text-white text-xs px-6 py-3 rounded-lg"
                      onClick={() => window.open("https://wa.me/9645437318", "_blank")}
                    >
                      CONTACT
                    </Button>
                  </CardContent>
                </Card>

                <Card className="game-card p-6">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center border-2 border-white">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-pixel text-white text-sm mb-2">COORDINATOR 2</h4>
                    <p className="text-gray-300 font-pixel text-xs mb-4">Meera Surendran</p>
                    <Button
                      className="arcade-button font-pixel text-white text-xs px-6 py-3 rounded-lg"
                      onClick={() => window.open("https://wa.me/8891240778", "_blank")}
                    >
                      CONTACT
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center border-2 border-white">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="font-pixel text-gray-400 text-xs mb-4">BLIND DATE HACKATHON 2025</p>
            <p className="text-gray-500 text-sm text-balance">
              Organized with ❤️ by the AIML Dept at Vidya Academy of Science and Technology
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
