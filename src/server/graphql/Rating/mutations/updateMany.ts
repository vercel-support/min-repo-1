import { mutationField, nonNull } from 'nexus'

export const RatingUpdateManyMutation = mutationField('updateManyRating', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'RatingWhereInput',
    data: nonNull('RatingUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.rating.updateMany(args as any)
  },
})
