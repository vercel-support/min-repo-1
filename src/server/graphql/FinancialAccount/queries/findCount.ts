import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountFindCountQuery = queryField(
  'findManyFinancialAccountCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialAccountWhereInput',
      orderBy: list('FinancialAccountOrderByInput'),
      cursor: 'FinancialAccountWhereUniqueInput',
      distinct: 'FinancialAccountScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccount.count(args as any)
    },
  },
)
