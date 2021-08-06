import { mutationField, nonNull } from 'nexus'

export const RiskToleranceUpsertOneMutation = mutationField(
  'upsertOneRiskTolerance',
  {
    type: nonNull('RiskTolerance'),
    args: {
      where: nonNull('RiskToleranceWhereUniqueInput'),
      create: nonNull('RiskToleranceCreateInput'),
      update: nonNull('RiskToleranceUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.riskTolerance.upsert({
        ...args,
        ...select,
      })
    },
  },
)
