import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyUpdateOneMutation = mutationField(
  'updateOneReviewFrequency',
  {
    type: nonNull('ReviewFrequency'),
    args: {
      where: nonNull('ReviewFrequencyWhereUniqueInput'),
      data: nonNull('ReviewFrequencyUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.reviewFrequency.update({
        where,
        data,
        ...select,
      })
    },
  },
)
