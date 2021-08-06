import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsDeleteOneMutation = mutationField(
  'deleteOnePersonalInterests',
  {
    type: 'PersonalInterests',
    args: {
      where: nonNull('PersonalInterestsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.personalInterests.delete({
        where,
        ...select,
      })
    },
  },
)
