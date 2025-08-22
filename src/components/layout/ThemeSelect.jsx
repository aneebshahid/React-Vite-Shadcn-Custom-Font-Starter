import { useTheme } from "@/lib/theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  // Ensure the Select has a controlled value ("light" | "dark" | "system")
  const value = theme || "system";

  return (
    <div className="inline-flex items-center gap-2">
      {/* <span className="text-sm text-neutral-600 dark:text-neutral-400">
        Theme
      </span> */}
      <Select value={value} onValueChange={(v) => setTheme(v)}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" /> Light
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" /> Dark
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-2">
              <Laptop className="h-4 w-4" /> System
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
