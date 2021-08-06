import { mutationField, nonNull } from 'nexus'

export const ReviewFrequencyUpsertOneMutation = mutationField(
  'upsertOneReviewFrequency',
  {
    type: nonNull('ReviewFrequency'),
    args: {
      where: nonNull('ReviewFrequencyWhereUniqueInput'),
      create: nonNull('ReviewFrequencyCreateInput'),
      update: nonNull('ReviewFrequencyUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.reviewFrequency.upsert({
        ...args,
        ...select,
      })
    },
  },
)
