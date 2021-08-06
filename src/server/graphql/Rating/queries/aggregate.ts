import { queryField, list } from 'nexus'

export const RatingAggregateQuery = queryField('aggregateRating', {
  type: 'AggregateRating',
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByInput'),
    cursor: 'RatingWhereUniqueInput',
    distinct: 'RatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.aggregate({ ...args, ...select }) as any
  },
})
