// components/admission/FeeStructureSection.tsx
import Image from "next/image";

const FeeStructureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Fee Structure Section */}
      <div className="mb-12">
        <div className="bg-red-500 py-2 px-4">
          <h2 className="text-white text-2xl font-bold">Fee Structure</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="border border-red-400 py-3 px-4 text-left">S.no.</th>
                <th className="border border-red-400 py-3 px-4 text-left">Class</th>
                <th className="border border-red-400 py-3 px-4 text-left">Tuition Fee</th>
              </tr>
            </thead>
            <tbody>
            <tr className="bg-white">
                <td className="border border-gray-200 py-3 px-4">1</td>
                <td className="border border-gray-200 py-3 px-4">Admission</td>
                <td className="border border-gray-200 py-3 px-4">1500</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="border border-gray-200 py-3 px-4">2</td>
                <td className="border border-gray-200 py-3 px-4">PREP to UKG</td>
                <td className="border border-gray-200 py-3 px-4">400/Month</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 py-3 px-4">3</td>
                <td className="border border-gray-200 py-3 px-4">I to III</td>
                <td className="border border-gray-200 py-3 px-4">400/Month</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="border border-gray-200 py-3 px-4">4</td>
                <td className="border border-gray-200 py-3 px-4">IV to VIII</td>
                <td className="border border-gray-200 py-3 px-4">500/Month</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 py-3 px-4">5</td>
                <td className="border border-gray-200 py-3 px-4">Exam </td>
                <td className="border border-gray-200 py-3 px-4">200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents Required Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">DOCUMENTS REQUIRED</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/5">
            <p className="mb-4 text-gray-800">
              A duly filled form available from the school is to be submitted with the non-refundable, 
              non-transferable Registration Fee. Following documents are to be submitted with the 
              form:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Copy of birth certificate</li>
              <li>Original transfer certificate from the student's previous school.</li>
              <li>Three passport size photographs of the student.</li>
              <li>Medical certificate of fitness of the student from a registered medical practitioner.</li>
              <li>The student's last academic report from the previous school.</li>
            </ul>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              <Image 
                src="/images/about/aboutus.png" 
                alt="Documents Illustration" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructureSection;
