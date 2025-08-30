import { useEffect, useState } from "react";
import DATA_TYPE_ORDER from "../constants/dataTypeOrder";
import type { Gene } from "../common/types";

const useData = () => {
  const [data, setData] = useState<Gene[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const query = `
    query lungCarcinomaAssociatedTargets ($efoId: String!, $index: Int!, $size: Int!) {
      disease (efoId: $efoId) {
        associatedTargets (page: { index: $index, size: $size }) {
          rows {
            target {
              id
              approvedSymbol
              approvedName
            }
            score
            datatypeScores {
              id
              score
            }
          }
        }
      }
    }`;

  const variables = { efoId: "EFO_0001071", index: 0, size: 25 };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.platform.opentargets.org/api/v4/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      if (response.status >= 400) throw new Error(`Request failed with status: ${response.status}`);

      const data = await response.json();
      const rows = data?.data?.disease?.associatedTargets?.rows as Gene[] | undefined;

      if (!rows) throw new Error(`Malformed response data`);

      rows.forEach((row) =>
        row.datatypeScores.sort((a, b) => DATA_TYPE_ORDER[a.id] - DATA_TYPE_ORDER[b.id])
      );

      // NOTE: Purposefully adding timeout so that loading screen is visible for 2 seconds
      setTimeout(() => {
        setData(rows.sort((a, b) => b.score - a.score).slice(0, 10));
        setLoading(false);
      }, 2000);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading] as [Gene[], boolean, boolean];
};

export default useData;
