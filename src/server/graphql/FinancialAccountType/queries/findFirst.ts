import { queryField, list } from 'nexus'

export const FinancialAccountTypeFindFirstQuery = queryField(
  'findFirstFinancialAccountType',
  {
    type: 'FinancialAccountType',
    args: {
      where: 'FinancialAccountTypeWhereInput',
      orderBy: list('FinancialAccountTypeOrderByInput'),
      cursor: 'FinancialAccountTypeWhereUniqueInput',
      distinct: 'FinancialAccountTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
