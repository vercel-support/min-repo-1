import { queryField, nonNull, list } from 'nexus'

export const RiskToleranceFindCountQuery = queryField(
  'findManyRiskToleranceCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'RiskToleranceWhereInput',
      orderBy: list('RiskToleranceOrderByInput'),
      cursor: 'RiskToleranceWhereUniqueInput',
      distinct: 'RiskToleranceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.riskTolerance.count(args as any)
    },
  },
)
