import { queryField, list } from 'nexus'

export const FinancialGoalAggregateQuery = queryField(
  'aggregateFinancialGoal',
  {
    type: 'AggregateFinancialGoal',
    args: {
      where: 'FinancialGoalWhereInput',
      orderBy: list('FinancialGoalOrderByInput'),
      cursor: 'FinancialGoalWhereUniqueInput',
      distinct: 'FinancialGoalScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoal.aggregate({ ...args, ...select }) as any
    },
  },
)
