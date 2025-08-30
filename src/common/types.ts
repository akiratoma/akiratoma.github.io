export type DataTypeScoreId =
  | "genetic_association"
  | "somatic_mutation"
  | "known_drug"
  | "affected_pathway"
  | "literature"
  | "rna_expression"
  | "animal_model";

export interface DataTypeScore {
  id: DataTypeScoreId;
  score: number;
}

export interface Gene {
  target: {
    id: string;
    approvedSymbol: string;
    approvedName: string;
  };
  score: number;
  datatypeScores: DataTypeScore[];
}
