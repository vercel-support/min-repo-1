import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountFindManyQuery = queryField(
  'findManyFinancialAccount',
  {
    type: nonNull(list(nonNull('FinancialAccount'))),
    args: {
      where: 'FinancialAccountWhereInput',
      orderBy: list('FinancialAccountOrderByInput'),
      cursor: 'FinancialAccountWhereUniqueInput',
      distinct: 'FinancialAccountScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccount.findMany({
        ...args,
        ...select,
      })
    },
  },
)
