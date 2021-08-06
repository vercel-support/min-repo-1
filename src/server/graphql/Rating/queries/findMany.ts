import { queryField, nonNull, list } from 'nexus'

export const RatingFindManyQuery = queryField('findManyRating', {
  type: nonNull(list(nonNull('Rating'))),
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByInput'),
    cursor: 'RatingWhereUniqueInput',
    distinct: 'RatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.rating.findMany({
      ...args,
      ...select,
    })
  },
})
