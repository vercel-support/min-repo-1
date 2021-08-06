import { mutationField, nonNull } from 'nexus'

export const RiskToleranceCreateOneMutation = mutationField(
  'createOneRiskTolerance',
  {
    type: nonNull('RiskTolerance'),
    args: {
      data: nonNull('RiskToleranceCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.riskTolerance.create({
        data,
        ...select,
      })
    },
  },
)
