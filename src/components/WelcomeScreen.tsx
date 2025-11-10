import { Sparkles, Search, Brain, MessageSquare } from "lucide-react";

export function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-transparent">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Search className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Explainable Science Search
          </h1>
          <p className="text-lg text-gray-300">
            Your AI assistant for Explainable Information Retrieval (XIR)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200">
            <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-100 mb-1">Explainability</h3>
            <p className="text-sm text-gray-400">
              Learn about transparency in search algorithms and interpretable
              models.
            </p>
          </div>

          <div className="p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200">
            <div className="w-10 h-10 bg-indigo-900/40 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-gray-100 mb-1">
              Information Retrieval
            </h3>
            <p className="text-sm text-gray-400">
              Explore scientific search systems and ranking methodologies.
            </p>
          </div>

          <div className="p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-200">
            <div className="w-10 h-10 bg-teal-900/40 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-semibold text-gray-100 mb-1">
              Expert Guidance
            </h3>
            <p className="text-sm text-gray-400">
              Get detailed explanations focused exclusively on XIR topics.
            </p>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-gray-400">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <p className="text-sm">
            Ask me anything about Explainable Science Search (XIR)
          </p>
        </div>
      </div>
    </div>
  );
}
