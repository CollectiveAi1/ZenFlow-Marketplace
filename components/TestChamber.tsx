import React, { useState } from 'react';
import { runAgentTest } from '../services/geminiService';
import SpinnerIcon from './icons/SpinnerIcon';
import SparklesIcon from './icons/SparklesIcon';

interface TestChamberProps {
  systemInstruction: string;
  initialPrompt: string;
}

const TestChamber: React.FC<TestChamberProps> = ({ systemInstruction, initialPrompt }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRunTest = async () => {
    setIsLoading(true);
    setError(null);
    setResponse('');
    try {
      const result = await runAgentTest(prompt, systemInstruction);
      setResponse(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mt-6">
      <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
        <SparklesIcon className="w-6 h-6 mr-2 text-primary-400" />
        Test Chamber
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-slate-400 mb-1">
            Your Prompt
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your instructions for the agent..."
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleRunTest}
            disabled={isLoading || !prompt.trim()}
            className="flex items-center justify-center bg-primary-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isLoading ? (
              <>
                <SpinnerIcon className="w-5 h-5 mr-2" />
                Running...
              </>
            ) : (
              'Run Test'
            )}
          </button>
        </div>
        {error && (
            <div role="alert" className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-lg">
                <p><span className="font-bold">Error:</span> {error}</p>
            </div>
        )}
        {(isLoading || response) && (
            <div className="mt-4">
                <h4 className="text-lg font-semibold text-slate-200 mb-2">Agent Response</h4>
                <div 
                  className="bg-slate-800 border border-slate-700 rounded-lg p-4 min-h-[10rem] whitespace-pre-wrap text-slate-300 font-mono text-sm"
                  role="status"
                  aria-live="polite"
                >
                    {isLoading && !response && <div className="flex items-center text-slate-400"><SpinnerIcon className="w-5 h-5 mr-2"/>Waiting for response...</div>}
                    {response}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default TestChamber;