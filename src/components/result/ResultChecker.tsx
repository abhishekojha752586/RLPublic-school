"use client";

import { useState, FormEvent } from "react";
import { Loader2 } from "lucide-react";

interface ResultData {
  name: string;
  marks: string;
  pdfUrl: string;
}

export default function ResultChecker() {
  const [formData, setFormData] = useState({ name: "", grade: "" });
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `/api/result?Name=${encodeURIComponent(formData.name)}&Class=${encodeURIComponent(formData.grade)}`
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Result not found");
      }

      const data: ResultData = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch result");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-4">
          Check Your Academic Result
        </h1>
        <p className="text-gray-600 text-lg">
          Enter your details below to view your result.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-8 space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Class</label>
          <input
            type="text"
            required
            placeholder="e.g. 10th A"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin w-5 h-5" /> Checking...
            </span>
          ) : (
            "Check Result"
          )}
        </button>

        {error && (
          <div className="text-red-600 text-center font-medium">{error}</div>
        )}
      </form>

      {result && (
        <div className="mt-12 bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {result.name}&apos;s Result
          </h2>

          <div className="relative border rounded-lg overflow-hidden shadow">
            <iframe
              src={result.pdfUrl}
              title="Result PDF"
              width="100%"
              height="500px"
              className="w-full rounded"
            ></iframe>

            {/* Watermark Overlay */}
            <div className="absolute inset-0 flex items-end justify-end pointer-events-none p-4">
              <span className="text-sm text-gray-500 opacity-70 font-medium">
                © {result.name} | View Only
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
