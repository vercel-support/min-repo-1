import { queryField, list } from 'nexus'

export const ReviewFrequencyAggregateQuery = queryField(
  'aggregateReviewFrequency',
  {
    type: 'AggregateReviewFrequency',
    args: {
      where: 'ReviewFrequencyWhereInput',
      orderBy: list('ReviewFrequencyOrderByInput'),
      cursor: 'ReviewFrequencyWhereUniqueInput',
      distinct: 'ReviewFrequencyScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.reviewFrequency.aggregate({ ...args, ...select }) as any
    },
  },
)
