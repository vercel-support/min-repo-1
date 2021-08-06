import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeDeleteOneMutation = mutationField(
  'deleteOneOwnershipType',
  {
    type: 'OwnershipType',
    args: {
      where: nonNull('OwnershipTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.ownershipType.delete({
        where,
        ...select,
      })
    },
  },
)
