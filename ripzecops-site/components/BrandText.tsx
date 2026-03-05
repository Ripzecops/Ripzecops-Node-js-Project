import Link from "next/link";
import { BRAND } from "@/lib/config";

export default function BrandText() {
  return (
    <Link href="/" className="focus-ring">
      <span className="text-xl font-extrabold tracking-widest chrome-text uppercase title-text drop-shadow-glow">{BRAND.name}</span>
    </Link>
  );
}
