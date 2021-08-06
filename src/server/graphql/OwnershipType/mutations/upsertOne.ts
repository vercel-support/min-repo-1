import { mutationField, nonNull } from 'nexus'

export const OwnershipTypeUpsertOneMutation = mutationField(
  'upsertOneOwnershipType',
  {
    type: nonNull('OwnershipType'),
    args: {
      where: nonNull('OwnershipTypeWhereUniqueInput'),
      create: nonNull('OwnershipTypeCreateInput'),
      update: nonNull('OwnershipTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.ownershipType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
