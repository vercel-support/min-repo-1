import { mutationField, nonNull } from 'nexus'

export const CreditRatingUpdateManyMutation = mutationField(
  'updateManyCreditRating',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CreditRatingWhereInput',
      data: nonNull('CreditRatingUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.creditRating.updateMany(args as any)
    },
  },
)
