import { queryField, list } from 'nexus'

export const InvestmentObjectivesAggregateQuery = queryField(
  'aggregateInvestmentObjectives',
  {
    type: 'AggregateInvestmentObjectives',
    args: {
      where: 'InvestmentObjectivesWhereInput',
      orderBy: list('InvestmentObjectivesOrderByInput'),
      cursor: 'InvestmentObjectivesWhereUniqueInput',
      distinct: 'InvestmentObjectivesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentObjectives.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
