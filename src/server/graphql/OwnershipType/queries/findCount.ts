import { queryField, nonNull, list } from 'nexus'

export const OwnershipTypeFindCountQuery = queryField(
  'findManyOwnershipTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OwnershipTypeWhereInput',
      orderBy: list('OwnershipTypeOrderByInput'),
      cursor: 'OwnershipTypeWhereUniqueInput',
      distinct: 'OwnershipTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.ownershipType.count(args as any)
    },
  },
)
