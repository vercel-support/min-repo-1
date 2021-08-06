import { queryField, list } from 'nexus'

export const FinancialGoalStatusFindFirstQuery = queryField(
  'findFirstFinancialGoalStatus',
  {
    type: 'FinancialGoalStatus',
    args: {
      where: 'FinancialGoalStatusWhereInput',
      orderBy: list('FinancialGoalStatusOrderByInput'),
      cursor: 'FinancialGoalStatusWhereUniqueInput',
      distinct: 'FinancialGoalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
