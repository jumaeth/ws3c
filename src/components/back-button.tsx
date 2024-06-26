import { Icons } from "@/components/icons.tsx"

export default function BackButton({ onClick }: { onClick: () => void }) {
  if (window.location.pathname === "/") {
    return <div />;
  }
  return (
    <button
      onClick={onClick}
      className="text-white font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
    >
      <Icons.arrowLeft color="#6b7280" className="w-6 h-6 mr-2" />
      <span className="text-gray-500">Zurück</span>
    </button>
  )
}