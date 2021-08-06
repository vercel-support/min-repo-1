import { queryField, nonNull } from 'nexus'

export const CreditRatingFindUniqueQuery = queryField(
  'findUniqueCreditRating',
  {
    type: 'CreditRating',
    args: {
      where: nonNull('CreditRatingWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.creditRating.findUnique({
        where,
        ...select,
      })
    },
  },
)
