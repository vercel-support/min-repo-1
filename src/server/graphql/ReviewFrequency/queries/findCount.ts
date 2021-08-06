import { queryField, nonNull, list } from 'nexus'

export const ReviewFrequencyFindCountQuery = queryField(
  'findManyReviewFrequencyCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ReviewFrequencyWhereInput',
      orderBy: list('ReviewFrequencyOrderByInput'),
      cursor: 'ReviewFrequencyWhereUniqueInput',
      distinct: 'ReviewFrequencyScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.reviewFrequency.count(args as any)
    },
  },
)
