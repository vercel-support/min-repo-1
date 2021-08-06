import { queryField, list } from 'nexus'

export const ReviewFrequencyFindFirstQuery = queryField(
  'findFirstReviewFrequency',
  {
    type: 'ReviewFrequency',
    args: {
      where: 'ReviewFrequencyWhereInput',
      orderBy: list('ReviewFrequencyOrderByInput'),
      cursor: 'ReviewFrequencyWhereUniqueInput',
      distinct: 'ReviewFrequencyScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.reviewFrequency.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
