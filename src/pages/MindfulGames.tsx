import React from 'react';
import { Brain, Heart, Users, Zap } from 'lucide-react';
import GameCard from '../components/GameCard';

export default function MindfulGames() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mindful Games</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover games that help you relax, focus, and build resilience while providing therapeutic benefits.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Stress Relief</h3>
            <p className="text-gray-600">Games for relaxation and productivity</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Self-Reflection</h3>
            <p className="text-gray-600">Build emotional resilience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Social Games</h3>
            <p className="text-gray-600">Connect and collaborate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mental Skills</h3>
            <p className="text-gray-600">Train your cognitive abilities</p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard
            title="Forest: Stay Focused"
            description="Plant virtual trees that grow while you stay focused. If you leave the app, your tree dies."
            benefits={[
              "Improves focus and productivity",
              "Reduces phone addiction",
              "Gamifies time management"
            ]}
            imageUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80"
            downloadUrl="https://www.forestapp.cc/"
            category="Stress Relief"
          />
          <GameCard
            title="Celeste"
            description="A beautiful platformer about climbing a mountain, dealing with anxiety, and overcoming personal challenges."
            benefits={[
              "Teaches persistence",
              "Explores mental health themes",
              "Builds resilience"
            ]}
            imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
            downloadUrl="https://www.celestegame.com/"
            category="Self-Reflection"
          />
          <GameCard
            title="Peak - Brain Training"
            description="Scientifically designed games to challenge your cognitive skills and track your progress."
            benefits={[
              "Improves memory",
              "Enhances problem-solving",
              "Builds mental agility"
            ]}
            imageUrl="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80"
            downloadUrl="https://www.peak.net/"
            category="Mental Skills"
          />
        </div>
      </div>
    </div>
  );
}