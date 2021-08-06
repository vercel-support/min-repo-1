import { queryField, nonNull } from 'nexus'

export const InvestmentObjectivesFindUniqueQuery = queryField(
  'findUniqueInvestmentObjectives',
  {
    type: 'InvestmentObjectives',
    args: {
      where: nonNull('InvestmentObjectivesWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.investmentObjectives.findUnique({
        where,
        ...select,
      })
    },
  },
)
