import { queryField, nonNull, list } from 'nexus'

export const RatingFindCountQuery = queryField('findManyRatingCount', {
  type: nonNull('Int'),
  args: {
    where: 'RatingWhereInput',
    orderBy: list('RatingOrderByInput'),
    cursor: 'RatingWhereUniqueInput',
    distinct: 'RatingScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.rating.count(args as any)
  },
})
