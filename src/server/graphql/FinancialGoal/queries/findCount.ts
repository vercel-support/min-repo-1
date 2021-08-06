import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalFindCountQuery = queryField(
  'findManyFinancialGoalCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialGoalWhereInput',
      orderBy: list('FinancialGoalOrderByInput'),
      cursor: 'FinancialGoalWhereUniqueInput',
      distinct: 'FinancialGoalScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoal.count(args as any)
    },
  },
)
