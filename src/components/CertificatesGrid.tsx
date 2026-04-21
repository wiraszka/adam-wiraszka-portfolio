"use client";

import { useFetch } from "@/hooks/useFetch";
import CertificateCard from "./CertificateCard";
import SkeletonGrid from "./SkeletonGrid";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export default function CertificatesGrid() {
  const { data: certificates, loading } = useFetch<Certificate>("/api/certificates");

  if (loading) return <SkeletonGrid />;
  if (certificates.length === 0) return <p className="text-stone-400">No certificates found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} {...certificate} />
      ))}
    </div>
  );
}
