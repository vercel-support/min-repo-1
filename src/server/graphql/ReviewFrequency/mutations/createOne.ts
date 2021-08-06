import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyCreateOneMutation = mutationField(
  'createOneReviewFrequency',
  {
    type: nonNull('ReviewFrequency'),
    args: {
      data: nonNull('ReviewFrequencyCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.reviewFrequency.create({
        data,
        ...select,
      })
    },
  },
)
