import { queryField, nonNull, list } from 'nexus'

export const CreditRatingFindManyQuery = queryField('findManyCreditRating', {
  type: nonNull(list(nonNull('CreditRating'))),
  args: {
    where: 'CreditRatingWhereInput',
    orderBy: list('CreditRatingOrderByInput'),
    cursor: 'CreditRatingWhereUniqueInput',
    distinct: 'CreditRatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditRating.findMany({
      ...args,
      ...select,
    })
  },
})
