import { ServiceDetail, serviceMetadata } from "@/components/sections/ServiceDetail";

const slug = "skill-assessments";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
