import { ReactNode } from "react";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

type CalloutType = "info" | "warning" | "success";

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
}

const styles = {
  info: {
    icon: Info,
    className: "border-blue-500 bg-blue-500/10 text-blue-200",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-500 bg-yellow-500/10 text-yellow-200",
  },
  success: {
    icon: CheckCircle,
    className: "border-green-500 bg-green-500/10 text-green-200",
  },
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const { icon: Icon, className } = styles[type];

  return (
    <div className={`flex gap-3 border-l-4 p-4 rounded-lg my-6 ${className}`}>
      <Icon size={20} className="mt-1" />
      <div>{children}</div>
    </div>
  );
}
