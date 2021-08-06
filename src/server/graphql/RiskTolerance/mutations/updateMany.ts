import { mutationField, nonNull } from 'nexus'

export const RiskToleranceUpdateManyMutation = mutationField(
  'updateManyRiskTolerance',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'RiskToleranceWhereInput',
      data: nonNull('RiskToleranceUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.riskTolerance.updateMany(args as any)
    },
  },
)
