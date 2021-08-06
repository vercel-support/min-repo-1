import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalFindManyQuery = queryField('findManyFinancialGoal', {
  type: nonNull(list(nonNull('FinancialGoal'))),
  args: {
    where: 'FinancialGoalWhereInput',
    orderBy: list('FinancialGoalOrderByInput'),
    cursor: 'FinancialGoalWhereUniqueInput',
    distinct: 'FinancialGoalScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.financialGoal.findMany({
      ...args,
      ...select,
    })
  },
})
