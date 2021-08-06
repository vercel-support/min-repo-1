import { queryField, nonNull, list } from 'nexus'

export const InvestmentObjectivesFindCountQuery = queryField(
  'findManyInvestmentObjectivesCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'InvestmentObjectivesWhereInput',
      orderBy: list('InvestmentObjectivesOrderByInput'),
      cursor: 'InvestmentObjectivesWhereUniqueInput',
      distinct: 'InvestmentObjectivesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.investmentObjectives.count(args as any)
    },
  },
)
