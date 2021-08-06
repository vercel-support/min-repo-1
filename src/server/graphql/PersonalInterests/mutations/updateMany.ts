import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsUpdateManyMutation = mutationField(
  'updateManyPersonalInterests',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'PersonalInterestsWhereInput',
      data: nonNull('PersonalInterestsUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.personalInterests.updateMany(args as any)
    },
  },
)
