import { queryField, list } from 'nexus'

export const FinancialGoalStatusAggregateQuery = queryField(
  'aggregateFinancialGoalStatus',
  {
    type: 'AggregateFinancialGoalStatus',
    args: {
      where: 'FinancialGoalStatusWhereInput',
      orderBy: list('FinancialGoalStatusOrderByInput'),
      cursor: 'FinancialGoalStatusWhereUniqueInput',
      distinct: 'FinancialGoalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalStatus.aggregate({ ...args, ...select }) as any
    },
  },
)
