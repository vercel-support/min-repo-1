import { queryField, list } from 'nexus'

export const RiskToleranceFindFirstQuery = queryField(
  'findFirstRiskTolerance',
  {
    type: 'RiskTolerance',
    args: {
      where: 'RiskToleranceWhereInput',
      orderBy: list('RiskToleranceOrderByInput'),
      cursor: 'RiskToleranceWhereUniqueInput',
      distinct: 'RiskToleranceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.riskTolerance.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
