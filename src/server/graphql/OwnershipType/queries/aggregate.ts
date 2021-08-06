import { queryField, list } from 'nexus'

export const OwnershipTypeAggregateQuery = queryField(
  'aggregateOwnershipType',
  {
    type: 'AggregateOwnershipType',
    args: {
      where: 'OwnershipTypeWhereInput',
      orderBy: list('OwnershipTypeOrderByInput'),
      cursor: 'OwnershipTypeWhereUniqueInput',
      distinct: 'OwnershipTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.ownershipType.aggregate({ ...args, ...select }) as any
    },
  },
)
