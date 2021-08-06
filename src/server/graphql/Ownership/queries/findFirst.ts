import { queryField, list } from 'nexus'

export const OwnershipFindFirstQuery = queryField('findFirstOwnership', {
  type: 'Ownership',
  args: {
    where: 'OwnershipWhereInput',
    orderBy: list('OwnershipOrderByInput'),
    cursor: 'OwnershipWhereUniqueInput',
    distinct: 'OwnershipScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ownership.findFirst({
      ...args,
      ...select,
    })
  },
})
