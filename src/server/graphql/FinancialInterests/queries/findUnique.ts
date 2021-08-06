import { queryField, nonNull } from 'nexus'

export const FinancialInterestsFindUniqueQuery = queryField(
  'findUniqueFinancialInterests',
  {
    type: 'FinancialInterests',
    args: {
      where: nonNull('FinancialInterestsWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialInterests.findUnique({
        where,
        ...select,
      })
    },
  },
)
