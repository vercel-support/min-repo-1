import { queryField, list } from 'nexus'

export const CreditRatingAggregateQuery = queryField('aggregateCreditRating', {
  type: 'AggregateCreditRating',
  args: {
    where: 'CreditRatingWhereInput',
    orderBy: list('CreditRatingOrderByInput'),
    cursor: 'CreditRatingWhereUniqueInput',
    distinct: 'CreditRatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditRating.aggregate({ ...args, ...select }) as any
  },
})
