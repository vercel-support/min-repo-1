import { queryField, list } from 'nexus'

export const FinancialGoalFindFirstQuery = queryField(
  'findFirstFinancialGoal',
  {
    type: 'FinancialGoal',
    args: {
      where: 'FinancialGoalWhereInput',
      orderBy: list('FinancialGoalOrderByInput'),
      cursor: 'FinancialGoalWhereUniqueInput',
      distinct: 'FinancialGoalScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoal.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
