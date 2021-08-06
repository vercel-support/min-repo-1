import { queryField, list } from 'nexus'

export const HomeOwnershipAggregateQuery = queryField(
  'aggregateHomeOwnership',
  {
    type: 'AggregateHomeOwnership',
    args: {
      where: 'HomeOwnershipWhereInput',
      orderBy: list('HomeOwnershipOrderByInput'),
      cursor: 'HomeOwnershipWhereUniqueInput',
      distinct: 'HomeOwnershipScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.homeOwnership.aggregate({ ...args, ...select }) as any
    },
  },
)
