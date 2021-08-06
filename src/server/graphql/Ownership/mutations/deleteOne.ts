import { mutationField, nonNull } from 'nexus'

export const OwnershipDeleteOneMutation = mutationField('deleteOneOwnership', {
  type: 'Ownership',
  args: {
    where: nonNull('OwnershipWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.ownership.delete({
      where,
      ...select,
    })
  },
})
