import { queryField, list } from 'nexus'

export const FinancialGoalTypeFindFirstQuery = queryField(
  'findFirstFinancialGoalType',
  {
    type: 'FinancialGoalType',
    args: {
      where: 'FinancialGoalTypeWhereInput',
      orderBy: list('FinancialGoalTypeOrderByInput'),
      cursor: 'FinancialGoalTypeWhereUniqueInput',
      distinct: 'FinancialGoalTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
