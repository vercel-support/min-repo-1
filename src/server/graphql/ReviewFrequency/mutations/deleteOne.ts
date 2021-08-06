import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyDeleteOneMutation = mutationField(
  'deleteOneReviewFrequency',
  {
    type: 'ReviewFrequency',
    args: {
      where: nonNull('ReviewFrequencyWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.reviewFrequency.delete({
        where,
        ...select,
      })
    },
  },
)
