import { queryField, nonNull, list } from 'nexus'

export const OwnershipFindManyQuery = queryField('findManyOwnership', {
  type: nonNull(list(nonNull('Ownership'))),
  args: {
    where: 'OwnershipWhereInput',
    orderBy: list('OwnershipOrderByInput'),
    cursor: 'OwnershipWhereUniqueInput',
    distinct: 'OwnershipScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ownership.findMany({
      ...args,
      ...select,
    })
  },
})
