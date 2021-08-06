import { queryField, nonNull } from 'nexus'

export const ReviewFrequencyFindUniqueQuery = queryField(
  'findUniqueReviewFrequency',
  {
    type: 'ReviewFrequency',
    args: {
      where: nonNull('ReviewFrequencyWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.reviewFrequency.findUnique({
        where,
        ...select,
      })
    },
  },
)
