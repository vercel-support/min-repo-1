import { queryField, list } from 'nexus'

export const CreditRatingFindFirstQuery = queryField('findFirstCreditRating', {
  type: 'CreditRating',
  args: {
    where: 'CreditRatingWhereInput',
    orderBy: list('CreditRatingOrderByInput'),
    cursor: 'CreditRatingWhereUniqueInput',
    distinct: 'CreditRatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditRating.findFirst({
      ...args,
      ...select,
    })
  },
})
