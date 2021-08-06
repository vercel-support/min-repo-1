import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeUpdateOneMutation = mutationField(
  'updateOneOwnershipType',
  {
    type: nonNull('OwnershipType'),
    args: {
      where: nonNull('OwnershipTypeWhereUniqueInput'),
      data: nonNull('OwnershipTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.ownershipType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
