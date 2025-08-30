import type { DataTypeScoreId } from "../common/types";

const DATA_TYPE_ORDER: Record<DataTypeScoreId, number> = {
  genetic_association: 0,
  somatic_mutation: 1,
  known_drug: 2,
  affected_pathway: 3,
  literature: 4,
  rna_expression: 5,
  animal_model: 6,
};

export default DATA_TYPE_ORDER;
