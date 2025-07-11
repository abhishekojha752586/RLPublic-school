// app/admission/page.tsx
import AdmissionHero from "@/components/admission/AdmissionHero";
import FeeStructureSection from "@/components/admission/FeeStructureSection";
import AdmissionForm from "../../components/admission/AdmissionForm";


export default function AdmissionPage() {
  return (
    <main>
      <AdmissionHero />
      <FeeStructureSection />
      <AdmissionForm />
      {/* Other admission page sections */}
    </main>
  );
}
