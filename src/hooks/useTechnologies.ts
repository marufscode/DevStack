import { useEffect, useState } from "react";
import type { Technology } from "../types";

interface UseTechnologiesResult {
  technologies: Technology[];
  loading: boolean;
  error: string | null;
}

export function useTechnologies(): UseTechnologiesResult {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTechnologies() {
      try {
        setLoading(true);
        const response = await fetch("/technologies.json");
        if (!response.ok) {
          throw new Error(`Failed to load technologies (${response.status})`);
        }
        const data: Technology[] = await response.json();
        if (!cancelled) {
          setTechnologies(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadTechnologies();
    return () => {
      cancelled = true;
    };
  }, []);

  return { technologies, loading, error };
}
