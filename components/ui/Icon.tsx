import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Cake,
  ChefHat,
  ClipboardCheck,
  FileCheck,
  Globe,
  GraduationCap,
  Handshake,
  Layers,
  MapPin,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
  type LucideProps,
} from "lucide-react";

import type { IconName } from "@/content/types";

const icons = {
  "badge-check": BadgeCheck,
  route: Route,
  "chef-hat": ChefHat,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  layers: Layers,
  globe: Globe,
  "book-open": BookOpen,
  award: Award,
  users: Users,
  "file-check": FileCheck,
  search: Search,
  clipboard: ClipboardCheck,
  target: Target,
  "map-pin": MapPin,
  handshake: Handshake,
  cake: Cake,
  utensils: UtensilsCrossed,
  briefcase: Briefcase,
  sparkles: Sparkles,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.75} {...props} />;
}
