import Image from "next/image";
export default function TechItem({ name, icon }) {
  return (
    <div className="border border-gray-200 px-4 py-2  rounded-xl flex gap-2 bg-white">
      <Image src={icon} alt={name} width={20} height={20} />
      <span className="text-sm text-[#6B7280]">{name}</span>
    </div>
  );
}
