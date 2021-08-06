import { mutationField, nonNull } from 'nexus'

export const CreditRatingDeleteOneMutation = mutationField(
  'deleteOneCreditRating',
  {
    type: 'CreditRating',
    args: {
      where: nonNull('CreditRatingWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.creditRating.delete({
        where,
        ...select,
      })
    },
  },
)
