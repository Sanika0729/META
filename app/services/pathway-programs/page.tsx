import { ServiceDetail, serviceMetadata } from "@/components/sections/ServiceDetail";

const slug = "pathway-programs";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceDetail slug={slug} />;
}
