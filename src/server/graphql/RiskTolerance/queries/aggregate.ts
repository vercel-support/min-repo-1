import { queryField, list } from 'nexus'

export const RiskToleranceAggregateQuery = queryField(
  'aggregateRiskTolerance',
  {
    type: 'AggregateRiskTolerance',
    args: {
      where: 'RiskToleranceWhereInput',
      orderBy: list('RiskToleranceOrderByInput'),
      cursor: 'RiskToleranceWhereUniqueInput',
      distinct: 'RiskToleranceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.riskTolerance.aggregate({ ...args, ...select }) as any
    },
  },
)
