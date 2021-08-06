import { mutationField, nonNull } from 'nexus'

export const CreditRatingCreateOneMutation = mutationField(
  'createOneCreditRating',
  {
    type: nonNull('CreditRating'),
    args: {
      data: nonNull('CreditRatingCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.creditRating.create({
        data,
        ...select,
      })
    },
  },
)
