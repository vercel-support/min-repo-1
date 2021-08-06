import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipDeleteOneMutation = mutationField(
  'deleteOneHomeOwnership',
  {
    type: 'HomeOwnership',
    args: {
      where: nonNull('HomeOwnershipWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.homeOwnership.delete({
        where,
        ...select,
      })
    },
  },
)
