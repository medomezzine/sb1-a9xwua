import React from 'react';
import { MessageCircle, Shield, Users } from 'lucide-react';
import ForumCard from '../components/ForumCard';

const categories = [
  'Stress', 'Anxiety', 'School Life', 'Relationships', 'General Support'
];

export default function AnonymousForum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anonymous Forum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A safe, moderated space where you can share experiences, seek advice, and connect with others anonymously.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe & Anonymous</h3>
            <p className="text-gray-600">Share your thoughts without revealing your identity</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Receive guidance from mental health professionals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Connect with others who understand your journey</p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-purple-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-6">
          <ForumCard
            title="Dealing with exam anxiety"
            content="I have a big exam coming up and I'm feeling overwhelmed. Any tips on managing test anxiety?"
            category="Anxiety"
            upvotes={24}
            replies={8}
            timeAgo="2h ago"
          />
          <ForumCard
            title="Meditation techniques for beginners"
            content="Here are some effective meditation techniques I've found helpful for managing stress and anxiety..."
            category="Stress"
            upvotes={42}
            replies={15}
            timeAgo="4h ago"
            isExpertResponse={true}
          />
        </div>
      </div>
    </div>
  );
}