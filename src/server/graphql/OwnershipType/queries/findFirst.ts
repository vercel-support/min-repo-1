import { queryField, list } from 'nexus'

export const OwnershipTypeFindFirstQuery = queryField(
  'findFirstOwnershipType',
  {
    type: 'OwnershipType',
    args: {
      where: 'OwnershipTypeWhereInput',
      orderBy: list('OwnershipTypeOrderByInput'),
      cursor: 'OwnershipTypeWhereUniqueInput',
      distinct: 'OwnershipTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.ownershipType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
