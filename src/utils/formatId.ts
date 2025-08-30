import type { DataTypeScoreId } from "../common/types";

const formatId = (id: DataTypeScoreId) => {
  const mapping: Record<DataTypeScoreId, string> = {
    genetic_association: "Genetic Association",
    somatic_mutation: "Somatic Mutation",
    known_drug: "Known Drug",
    affected_pathway: "Affected Pathway",
    literature: "Literature",
    rna_expression: "RNA Expression",
    animal_model: "Animal Model",
  };

  return mapping[id];
};

export default formatId;
