import { queryField, list } from 'nexus'

export const RatingFindFirstQuery = queryField('findFirstRating', {
  type: 'Rating',
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByInput'),
    cursor: 'RatingWhereUniqueInput',
    distinct: 'RatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.findFirst({
      ...args,
      ...select,
    })
  },
})
