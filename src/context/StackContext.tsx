import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types";

interface StackContextValue {
  stack: Technology[];
  isInStack: (id: string) => boolean;
  addToStack: (tech: Technology) => void;
  removeFromStack: (id: string, name?: string) => void;
  removeAll: () => void;
}

const StackContext = createContext<StackContextValue | null>(null);

export function StackProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<Technology[]>([]);

  const isInStack = useCallback(
    (id: string) => stack.some((item) => item.id === id),
    [stack]
  );

  const addToStack = useCallback((tech: Technology) => {
    setStack((prev) => {
      if (prev.some((item) => item.id === tech.id)) {
        toast.warning(`${tech.name} is already in your stack.`);
        return prev;
      }
      toast.success(`${tech.name} added to your stack.`);
      return [...prev, tech];
    });
  }, []);

  const removeFromStack = useCallback((id: string, name?: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${name ?? "Technology"} removed from your stack.`);
  }, []);

  const removeAll = useCallback(() => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      toast.info("Your stack has been cleared.");
      return [];
    });
  }, []);

  const value = useMemo<StackContextValue>(
    () => ({ stack, isInStack, addToStack, removeFromStack, removeAll }),
    [stack, isInStack, addToStack, removeFromStack, removeAll]
  );

  return <StackContext.Provider value={value}>{children}</StackContext.Provider>;
}

export function useStack(): StackContextValue {
  const ctx = useContext(StackContext);
  if (!ctx) {
    throw new Error("useStack must be used within a StackProvider");
  }
  return ctx;
}
