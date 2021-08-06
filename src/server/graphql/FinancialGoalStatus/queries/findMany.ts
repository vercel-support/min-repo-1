import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalStatusFindManyQuery = queryField(
  'findManyFinancialGoalStatus',
  {
    type: nonNull(list(nonNull('FinancialGoalStatus'))),
    args: {
      where: 'FinancialGoalStatusWhereInput',
      orderBy: list('FinancialGoalStatusOrderByInput'),
      cursor: 'FinancialGoalStatusWhereUniqueInput',
      distinct: 'FinancialGoalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalStatus.findMany({
        ...args,
        ...select,
      })
    },
  },
)
