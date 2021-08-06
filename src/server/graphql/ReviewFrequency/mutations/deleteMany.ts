import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyDeleteManyMutation = mutationField(
  'deleteManyReviewFrequency',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ReviewFrequencyWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.reviewFrequency.deleteMany({ where } as any)
    },
  },
)
