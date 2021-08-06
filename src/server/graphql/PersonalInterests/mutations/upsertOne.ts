import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsUpsertOneMutation = mutationField(
  'upsertOnePersonalInterests',
  {
    type: nonNull('PersonalInterests'),
    args: {
      where: nonNull('PersonalInterestsWhereUniqueInput'),
      create: nonNull('PersonalInterestsCreateInput'),
      update: nonNull('PersonalInterestsUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.personalInterests.upsert({
        ...args,
        ...select,
      })
    },
  },
)
