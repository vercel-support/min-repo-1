import { queryField, nonNull, list } from 'nexus'

export const FinancialGoalTypeFindManyQuery = queryField(
  'findManyFinancialGoalType',
  {
    type: nonNull(list(nonNull('FinancialGoalType'))),
    args: {
      where: 'FinancialGoalTypeWhereInput',
      orderBy: list('FinancialGoalTypeOrderByInput'),
      cursor: 'FinancialGoalTypeWhereUniqueInput',
      distinct: 'FinancialGoalTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
