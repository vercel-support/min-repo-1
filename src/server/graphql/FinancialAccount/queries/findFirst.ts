import { queryField, list } from 'nexus'

export const FinancialAccountFindFirstQuery = queryField(
  'findFirstFinancialAccount',
  {
    type: 'FinancialAccount',
    args: {
      where: 'FinancialAccountWhereInput',
      orderBy: list('FinancialAccountOrderByInput'),
      cursor: 'FinancialAccountWhereUniqueInput',
      distinct: 'FinancialAccountScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccount.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
