import { queryField, nonNull, list } from 'nexus'

export const HomeOwnershipFindCountQuery = queryField(
  'findManyHomeOwnershipCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HomeOwnershipWhereInput',
      orderBy: list('HomeOwnershipOrderByInput'),
      cursor: 'HomeOwnershipWhereUniqueInput',
      distinct: 'HomeOwnershipScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.homeOwnership.count(args as any)
    },
  },
)
