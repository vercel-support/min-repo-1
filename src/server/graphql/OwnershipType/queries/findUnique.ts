import { queryField, nonNull } from 'nexus'

export const OwnershipTypeFindUniqueQuery = queryField(
  'findUniqueOwnershipType',
  {
    type: 'OwnershipType',
    args: {
      where: nonNull('OwnershipTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.ownershipType.findUnique({
        where,
        ...select,
      })
    },
  },
)
