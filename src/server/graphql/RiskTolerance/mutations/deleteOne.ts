import { mutationField, nonNull } from 'nexus'

export const RiskToleranceDeleteOneMutation = mutationField(
  'deleteOneRiskTolerance',
  {
    type: 'RiskTolerance',
    args: {
      where: nonNull('RiskToleranceWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.riskTolerance.delete({
        where,
        ...select,
      })
    },
  },
)
