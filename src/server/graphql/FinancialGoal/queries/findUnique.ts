import { queryField, nonNull } from 'nexus'

export const FinancialGoalFindUniqueQuery = queryField(
  'findUniqueFinancialGoal',
  {
    type: 'FinancialGoal',
    args: {
      where: nonNull('FinancialGoalWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialGoal.findUnique({
        where,
        ...select,
      })
    },
  },
)
