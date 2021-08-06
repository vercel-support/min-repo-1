import { mutationField, nonNull } from 'nexus'

export const CreditRatingDeleteManyMutation = mutationField(
  'deleteManyCreditRating',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CreditRatingWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.creditRating.deleteMany({ where } as any)
    },
  },
)
