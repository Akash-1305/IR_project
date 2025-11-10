import { Sparkles, Search, Brain, MessageSquare } from 'lucide-react';

export function WelcomeScreen() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
            <Search className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Explainable Science Search
          </h1>
          <p className="text-xl text-gray-600">
            Your AI assistant for Explainable Information Retrieval (XIR)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Explainability</h3>
            <p className="text-sm text-gray-600">
              Learn about transparency in search algorithms and interpretable models
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Information Retrieval</h3>
            <p className="text-sm text-gray-600">
              Explore scientific search systems and ranking methodologies
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-sm text-gray-600">
              Get detailed explanations focused exclusively on XIR topics
            </p>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-gray-500">
          <Sparkles className="w-4 h-4" />
          <p className="text-sm">Ask me anything about Explainable Science Search (XIR)</p>
        </div>
      </div>
    </div>
  );
}
