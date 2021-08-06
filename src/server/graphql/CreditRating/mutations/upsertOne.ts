import { mutationField, nonNull } from 'nexus'

export const CreditRatingUpsertOneMutation = mutationField(
  'upsertOneCreditRating',
  {
    type: nonNull('CreditRating'),
    args: {
      where: nonNull('CreditRatingWhereUniqueInput'),
      create: nonNull('CreditRatingCreateInput'),
      update: nonNull('CreditRatingUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.creditRating.upsert({
        ...args,
        ...select,
      })
    },
  },
)
