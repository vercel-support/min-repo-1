import { queryField, nonNull } from 'nexus'

export const RiskToleranceFindUniqueQuery = queryField(
  'findUniqueRiskTolerance',
  {
    type: 'RiskTolerance',
    args: {
      where: nonNull('RiskToleranceWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.riskTolerance.findUnique({
        where,
        ...select,
      })
    },
  },
)
