import { queryField, list } from 'nexus'

export const FinancialInterestsFindFirstQuery = queryField(
  'findFirstFinancialInterests',
  {
    type: 'FinancialInterests',
    args: {
      where: 'FinancialInterestsWhereInput',
      orderBy: list('FinancialInterestsOrderByInput'),
      cursor: 'FinancialInterestsWhereUniqueInput',
      distinct: 'FinancialInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialInterests.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
