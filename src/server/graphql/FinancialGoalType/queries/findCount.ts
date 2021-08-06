import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalTypeFindCountQuery = queryField(
  'findManyFinancialGoalTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialGoalTypeWhereInput',
      orderBy: list('FinancialGoalTypeOrderByInput'),
      cursor: 'FinancialGoalTypeWhereUniqueInput',
      distinct: 'FinancialGoalTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoalType.count(args as any)
    },
  },
)
