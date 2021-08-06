import { queryField, nonNull, list } from 'nexus'

export const InvestmentObjectivesFindManyQuery = queryField(
  'findManyInvestmentObjectives',
  {
    type: nonNull(list(nonNull('InvestmentObjectives'))),
    args: {
      where: 'InvestmentObjectivesWhereInput',
      orderBy: list('InvestmentObjectivesOrderByInput'),
      cursor: 'InvestmentObjectivesWhereUniqueInput',
      distinct: 'InvestmentObjectivesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentObjectives.findMany({
        ...args,
        ...select,
      })
    },
  },
)
