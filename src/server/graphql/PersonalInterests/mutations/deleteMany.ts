import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsDeleteManyMutation = mutationField(
  'deleteManyPersonalInterests',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'PersonalInterestsWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.personalInterests.deleteMany({ where } as any)
    },
  },
)
