import { mutationField, nonNull } from 'nexus'

export const CreditRatingUpdateOneMutation = mutationField(
  'updateOneCreditRating',
  {
    type: nonNull('CreditRating'),
    args: {
      where: nonNull('CreditRatingWhereUniqueInput'),
      data: nonNull('CreditRatingUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.creditRating.update({
        where,
        data,
        ...select,
      })
    },
  },
)
