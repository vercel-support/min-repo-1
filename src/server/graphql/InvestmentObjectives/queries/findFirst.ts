import { queryField, list } from 'nexus'

export const InvestmentObjectivesFindFirstQuery = queryField(
  'findFirstInvestmentObjectives',
  {
    type: 'InvestmentObjectives',
    args: {
      where: 'InvestmentObjectivesWhereInput',
      orderBy: list('InvestmentObjectivesOrderByInput'),
      cursor: 'InvestmentObjectivesWhereUniqueInput',
      distinct: 'InvestmentObjectivesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentObjectives.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
