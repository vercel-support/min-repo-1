import { queryField, list } from 'nexus'

export const FinancialGoalTypeAggregateQuery = queryField(
  'aggregateFinancialGoalType',
  {
    type: 'AggregateFinancialGoalType',
    args: {
      where: 'FinancialGoalTypeWhereInput',
      orderBy: list('FinancialGoalTypeOrderByInput'),
      cursor: 'FinancialGoalTypeWhereUniqueInput',
      distinct: 'FinancialGoalTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalType.aggregate({ ...args, ...select }) as any
    },
  },
)
