import { queryField, nonNull, list } from 'nexus'

export const FinancialInterestsFindManyQuery = queryField(
  'findManyFinancialInterests',
  {
    type: nonNull(list(nonNull('FinancialInterests'))),
    args: {
      where: 'FinancialInterestsWhereInput',
      orderBy: list('FinancialInterestsOrderByInput'),
      cursor: 'FinancialInterestsWhereUniqueInput',
      distinct: 'FinancialInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialInterests.findMany({
        ...args,
        ...select,
      })
    },
  },
)
