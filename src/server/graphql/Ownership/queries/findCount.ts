import { queryField, nonNull, list } from 'nexus'

export const OwnershipFindCountQuery = queryField('findManyOwnershipCount', {
  type: nonNull('Int'),
  args: {
    where: 'OwnershipWhereInput',
    orderBy: list('OwnershipOrderByInput'),
    cursor: 'OwnershipWhereUniqueInput',
    distinct: 'OwnershipScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.ownership.count(args as any)
  },
})
