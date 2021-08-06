import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalStatusFindCountQuery = queryField(
  'findManyFinancialGoalStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialGoalStatusWhereInput',
      orderBy: list('FinancialGoalStatusOrderByInput'),
      cursor: 'FinancialGoalStatusWhereUniqueInput',
      distinct: 'FinancialGoalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoalStatus.count(args as any)
    },
  },
)
