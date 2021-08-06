import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyUpdateManyMutation = mutationField(
  'updateManyReviewFrequency',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ReviewFrequencyWhereInput',
      data: nonNull('ReviewFrequencyUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.reviewFrequency.updateMany(args as any)
    },
  },
)
