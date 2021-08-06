import { queryField, nonNull, list } from 'nexus'

export const OwnershipTypeFindManyQuery = queryField('findManyOwnershipType', {
  type: nonNull(list(nonNull('OwnershipType'))),
  args: {
    where: 'OwnershipTypeWhereInput',
    orderBy: list('OwnershipTypeOrderByInput'),
    cursor: 'OwnershipTypeWhereUniqueInput',
    distinct: 'OwnershipTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ownershipType.findMany({
      ...args,
      ...select,
    })
  },
})
