import { queryField, list } from 'nexus'

export const OwnershipAggregateQuery = queryField('aggregateOwnership', {
  type: 'AggregateOwnership',
  args: {
    where: 'OwnershipWhereInput',
    orderBy: list('OwnershipOrderByInput'),
    cursor: 'OwnershipWhereUniqueInput',
    distinct: 'OwnershipScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ownership.aggregate({ ...args, ...select }) as any
  },
})
