import { queryField, nonNull, list } from 'nexus'

export const ReviewFrequencyFindManyQuery = queryField(
  'findManyReviewFrequency',
  {
    type: nonNull(list(nonNull('ReviewFrequency'))),
    args: {
      where: 'ReviewFrequencyWhereInput',
      orderBy: list('ReviewFrequencyOrderByInput'),
      cursor: 'ReviewFrequencyWhereUniqueInput',
      distinct: 'ReviewFrequencyScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.reviewFrequency.findMany({
        ...args,
        ...select,
      })
    },
  },
)
