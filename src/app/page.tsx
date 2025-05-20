import { Suspense } from "react";
import GlobeContainer from "./components/GlobeContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <header className="w-full max-w-4xl py-6">
        <h1 className="text-3xl font-bold text-center">Pretty Commit Visualizer</h1>
        <p className="text-center text-gray-600 mt-2">
          Visualize GitHub repository commits as an animated 3D globe
        </p>
      </header>
      
      <div className="w-full max-w-4xl flex-grow flex flex-col">
        <div className="bg-black/5 dark:bg-white/10 p-4 rounded-lg mb-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter GitHub repository URL (e.g., https://github.com/user/repo)"
              className="flex-grow px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Visualize
            </button>
          </div>
        </div>
        
        <div className="relative flex-grow rounded-lg overflow-hidden bg-gray-900 min-h-[60vh]">
          <Suspense fallback={<div className="flex h-full items-center justify-center text-white">Loading...</div>}>
            <GlobeContainer />
          </Suspense>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium">Total commits:</span> <span>0</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm">
              Pause
            </button>
            <button className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm">
              Reset View
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
