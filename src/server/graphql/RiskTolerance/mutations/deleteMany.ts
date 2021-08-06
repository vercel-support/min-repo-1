import { mutationField, nonNull } from 'nexus'

export const RiskToleranceDeleteManyMutation = mutationField(
  'deleteManyRiskTolerance',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'RiskToleranceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.riskTolerance.deleteMany({ where } as any)
    },
  },
)
