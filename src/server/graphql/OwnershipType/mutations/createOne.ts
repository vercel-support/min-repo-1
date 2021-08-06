import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeCreateOneMutation = mutationField(
  'createOneOwnershipType',
  {
    type: nonNull('OwnershipType'),
    args: {
      data: nonNull('OwnershipTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.ownershipType.create({
        data,
        ...select,
      })
    },
  },
)
